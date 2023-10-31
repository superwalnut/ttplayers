using CsvHelper.Configuration;
using CsvHelper;
using HtmlAgilityPack;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Globalization;
using TtPlayers.Importer.Configurations;
using TtPlayers.Importer.Domain.CsvMapping;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;
using TtPlayers.Importer.Extensions;
using TtPlayers.Importer.Infrastructure;
using TtPlayers.Importer.Applications.Base;
using TtPlayers.Importer.Applications.Scraper;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralEventsImporter
    {
        Task ImportEvents(bool forceAll = false);
        Task ImportEventMatches();
    }

    public class RatingCentralEventsImporter : RatingCentralImporterBase, IRatingCentralEventsImporter
    {
        private readonly ILogger<RatingCentralEventsImporter> _logger;
        private readonly IDocumentRepository<TtEvent> _eventRepository;
        private readonly IDocumentRepository<TtEventMatches> _eventMatchesRepository;
        private readonly IDocumentRepository<PlayerUpdate> _playerUpdateRepository;
        private readonly IDocumentRepository<Club> _clubRepository;

        private readonly IRatingCentralScraper _rcScraper;

        public RatingCentralEventsImporter(
            IDocumentRepository<TtEvent> eventRepository,
            IDocumentRepository<TtEventMatches> eventMatchesRepository,
            ICsvService<TtEventMatchEntry, TtEventMatchCsvMapping> eventMatchEntryCsvService,
            ICsvService<TtEventPlayerRatingChange, TtEventPlayerRatingChangeCsvMapping> eventRatingChangeCsvService,
            ICsvService<TtEventCsvModel, TtEventCsvMapping> eventCsvService,
            IDocumentRepository<PlayerUpdate> playerUpdateRepository,
            ILogger<RatingCentralEventsImporter> logger,
            IDocumentRepository<Club> clubRepository,
            IRatingCentralScraper rcScraper)
            :base(logger)
        {
            _eventRepository = eventRepository;
            _eventMatchesRepository= eventMatchesRepository;
            _playerUpdateRepository= playerUpdateRepository;
            _rcScraper = rcScraper;
            _clubRepository= clubRepository;
            _logger = logger;
        }

        public async Task ImportEvents(bool forceAll = false)
        {
            var events = await _rcScraper.DownloadEventsAsync();

            if (events.Any())
            {
                var clubs = await _clubRepository.FilterByAsync(x => true);

                var pendingEvents = events;
                if(!forceAll)
                {
                    var importedEvents = await _eventRepository.FilterByAsync(x => true);
                    var importedIds = importedEvents.Select(x => x.Id).ToList();
                    pendingEvents = events.Where(x => !importedIds.Contains(x.Id)).ToList();
                }
                
                _logger.LogInformation($"There are {events.Count()} events found, need to import {pendingEvents.Count()} events.");

                var index = pendingEvents.Count();
                foreach (var evt in pendingEvents)
                {
                    _logger.LogInformation($"{index} - Importing event {evt.Name}:{evt.Id}...");

                    // enrich state & club name from club entities
                    EnrichClubInfo(evt, clubs);

                    // get player rating
                    var ratings = await GetPlayerRatingChanges(evt);
                    _logger.LogInformation($"Importing {ratings.Count} player ratings for event {evt.Name}:{evt.Id}...");

                    // update
                    evt.PlayerRatings = ratings.ToList();
                    evt.RequireDeltaPush = true;
                    await _eventRepository.UpsertAsync(evt, x => x.Id == evt.Id);

                    index--;
                    Thread.Sleep(200);
                }
                _logger.LogInformation($"Finish upserting {pendingEvents.Count()} events.");
            }
        }

        public async Task ImportEventMatches()
        {
            var events = await _eventRepository.FilterByAsync(c => true);

            var eventMatches = await _eventMatchesRepository.FilterByAsync(c => true);
            var importedEventIds = eventMatches.Select(x => x.Id).ToList();

            var pendingEvents = events.Where(x => !importedEventIds.Contains(x.Id));
            _logger.LogInformation($"There are {events.Count()} events in total, need to import {pendingEvents.Count()} events.");
            var index = pendingEvents.Count();
            foreach (var evt in pendingEvents)
            {
                await ImportSingleEventMatches(evt);
                _logger.LogInformation($"{index} - importing event matches for event - {evt.Name}:{evt.Id}.");
                Thread.Sleep(1000);
                index--;
            }
        }

        private void EnrichClubInfo(TtEvent evt, List<Club> clubs)
        {
            var club = clubs.FirstOrDefault(x => x.Id == evt.ClubId);
            if (club != null)
            {
                evt.ClubName = club.Name;
                if (string.IsNullOrEmpty(evt.State))
                {
                    evt.State = club.State.ToStateShortform();
                }
            }
        }

        private async Task<IList<TtEventPlayerRatingChange>> GetPlayerRatingChanges(TtEvent evt)
        {
            // import summary
            var ratings = await _rcScraper.DownloadEventPlayerRatingsAsync(evt.Id);

            // insert player update to player-update action table
            var updates = ratings.Select(x => new PlayerUpdate
            {
                Id = x.PlayerId,
                UpdatedDate = evt.Date
            }).ToList();

            foreach (var update in updates)
            {
                await _playerUpdateRepository.UpsertAsync(update, x => x.Id == update.Id);
            }

            return ratings;
        }


        private async Task ImportSingleEventMatches(TtEvent evt)
        {
            var matches = await _rcScraper.DownloadEventMatchesAsync(evt.Id);

            _logger.LogInformation($"Start importing {matches.Matches.Count} matches for event:{evt.Id}.");

            await _eventMatchesRepository.UpsertAsync(matches, x => x.Id == evt.Id);
        }
    }
}
