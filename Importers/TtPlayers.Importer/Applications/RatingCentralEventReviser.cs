using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Applications.Scraper;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralEventReviser
    {
        Task ReviseEvent(string eventId);
        Task<List<string>> ReviseEvents();
    }

    public class RatingCentralEventReviser : IRatingCentralEventReviser
    {
        private readonly ILogger<RatingCentralEventReviser> _logger;
        private readonly IDocumentRepository<TtEvent> _eventRepository;
        private readonly IDocumentRepository<TtEventMatches> _eventMatchesRepository;
        private readonly IDocumentRepository<TtEventPlayer> _eventPlayerRepository;
        private readonly IDocumentRepository<Match> _matchRepository;
        private readonly IRatingCentralScraper _rcScraper;
        private readonly IFireBaseRepository<Match> _firebaseEventMatchesRepository;
        private readonly IFireBaseRepository<TtEventPlayer> _firebaseEventPlayerRepository;

        public RatingCentralEventReviser(
            ILogger<RatingCentralEventReviser> logger,
            IDocumentRepository<TtEvent> eventRepository,
            IDocumentRepository<TtEventMatches> eventMatchesRepository,
            IDocumentRepository<TtEventPlayer> eventPlayerRepository,
            IDocumentRepository<Match> matchRepository,
            IRatingCentralScraper rcScraper,
            IFireBaseRepository<Match> firebaseEventMatchesRepository,
            IFireBaseRepository<TtEventPlayer> firebaseEventPlayerRepository)
        {
            _eventRepository = eventRepository;
            _eventMatchesRepository = eventMatchesRepository;
            _rcScraper = rcScraper;
            _eventPlayerRepository = eventPlayerRepository;
            _matchRepository = matchRepository;
            _logger = logger;
            _firebaseEventMatchesRepository = firebaseEventMatchesRepository;
            _firebaseEventPlayerRepository = firebaseEventPlayerRepository;
        }

        public async Task ReviseEvent(string eventId)
        {
            var importedEvents = await _eventRepository.FilterByAsync(x => x.Id == eventId);
            foreach(var evt in importedEvents)
            {
                _logger.LogInformation($"Revise event {evt.Id}:{evt.Name}.");
                
                // update event
                evt.RequireDeltaPush = true;
                evt.LastUpdated = DateTime.Now;
                await _eventRepository.UpsertAsync(evt, x => x.Id == evt.Id);

                // delete event-player & re-import
                await _eventPlayerRepository.DeleteByIdAsync(evt.Id);
                _logger.LogInformation($"Delete event-players for {evt.Id}:{evt.Name}.");

                // delete event-matches & re-import
                await _eventMatchesRepository.DeleteByIdAsync(evt.Id);
                _logger.LogInformation($"Delete event-matches for {evt.Id}:{evt.Name}.");

                // delete all matches for this event & transform matches
                var matches = await _matchRepository.FilterByAsync(x => x.EventId == evt.Id);
                await _matchRepository.DeleteManyAsync(x=>x.EventId == evt.Id);
                _logger.LogInformation($"Delete matches for {evt.Id}:{evt.Name}.");

                var matchIds = matches.Select(x => x.Id).ToList();

                // delete firebase event-players for this event
                await _firebaseEventPlayerRepository.Delete(new TtEventPlayer { Id = evt.Id });

                // delete firebase matches for this event
                var records = matchIds.Select(x => new Match { Id = x }).ToList();
                await _firebaseEventMatchesRepository.DeleteBulk(records);
            }
        }

        public async Task<List<string>> ReviseEvents()
        {
            var eventIds = new List<string>();

            //if submitted != revised, and LastUpdated < LastProcessedDate, then it requires revise!
            var events = await _rcScraper.DownloadEventsAsync();

            if (events.Any())
            {
                var importedEvents = await _eventRepository.FilterByAsync(x => true);
                var importedIds = importedEvents.Select(x => x.Id).ToList();

                // only revise existing events
                var pendingEvents = events.Where(x => importedIds.Contains(x.Id)).ToList();

                pendingEvents = pendingEvents.Where(x => x.SubmittedDate.HasValue &&
                    x.RevisedDate.HasValue &&
                    x.LastProcessedDate.HasValue &&
                    x.SubmittedDate.Value != x.RevisedDate.Value
                ).ToList();

                foreach (var evt in pendingEvents)
                {
                    var imported = importedEvents.FirstOrDefault(x => x.Id == evt.Id);

                    if (imported == null)
                        continue;

                    // indicates the we updated after they have processed, so no need to re-import
                    if (imported.LastUpdated > evt.LastProcessedDate)
                        continue;

                    await ReviseEvent(evt.Id);

                    eventIds.Add(evt.Id);
                }

                _logger.LogInformation($"Finish upserting {pendingEvents.Count()} events.");
            }

            return eventIds;
        }
    }
}
