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
        Task ImportEventPlayers(bool forceAll = false);

        Task Refresh_EventMatchAndPlayers_Counts();

        Task Refresh_EventDate_EventPlayers();

        Task Refresh_Gender_EventPlayers();
    }

    public class RatingCentralEventsImporter : RatingCentralImporterBase, IRatingCentralEventsImporter
    {
        private readonly ILogger<RatingCentralEventsImporter> _logger;
        private readonly IDocumentRepository<TtEvent> _eventRepository;
        private readonly IDocumentRepository<TtEventMatches> _eventMatchesRepository;
        private readonly IDocumentRepository<PlayerUpdate> _playerUpdateRepository;
        private readonly IDocumentRepository<Club> _clubRepository;
        private readonly IDocumentRepository<TtEventPlayer> _eventPlayerRepository;
        private readonly IDocumentRepository<Player> _playerRepository;

        private readonly IRatingCentralScraper _rcScraper;

        public RatingCentralEventsImporter(
            IDocumentRepository<TtEvent> eventRepository,
            IDocumentRepository<TtEventMatches> eventMatchesRepository,
            ICsvService<TtEventMatchEntry, TtEventMatchCsvMapping> eventMatchEntryCsvService,
            ICsvService<TtEventPlayerRating, TtEventPlayerRatingChangeCsvMapping> eventRatingChangeCsvService,
            ICsvService<TtEventCsvModel, TtEventCsvMapping> eventCsvService,
            IDocumentRepository<PlayerUpdate> playerUpdateRepository,
            ILogger<RatingCentralEventsImporter> logger,
            IDocumentRepository<Club> clubRepository,
            IDocumentRepository<TtEventPlayer> eventPlayerRepository,
            IDocumentRepository<Player> playerRepository,
            IRatingCentralScraper rcScraper)
            :base(logger)
        {
            _eventRepository = eventRepository;
            _eventMatchesRepository= eventMatchesRepository;
            _playerUpdateRepository= playerUpdateRepository;
            _rcScraper = rcScraper;
            _clubRepository= clubRepository;
            _eventPlayerRepository = eventPlayerRepository;
            _playerRepository= playerRepository;
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

                    // update
                    evt.RequireDeltaPush = true;

                    // set tags
                    evt.Tags = SetEventTags(evt);

                    index--;
                }

                await _eventRepository.UpsertManyAsync(pendingEvents);

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
                var matches = await _rcScraper.DownloadEventMatchesAsync(evt.Id);
                _logger.LogInformation($"Start importing {matches.Matches.Count} matches for event:{evt.Id}.");
                await _eventMatchesRepository.UpsertAsync(matches, x => x.Id == evt.Id);


                //Update event with match statistics
                evt.MatchCount = matches.Matches.Count;
                await _eventRepository.UpsertAsync(evt, x => x.Id == evt.Id);

                _logger.LogInformation($"{index} - importing event matches for event - {evt.Name}:{evt.Id}.");
                index--;
            }
        }

        public async Task ImportEventPlayers(bool forceAll = false)
        {
            var players = await _playerRepository.FilterByAsync(c => true);
            var events = await _eventRepository.FilterByAsync(c => true);
            
            var pendingEvents = events;

            if (!forceAll)
            {
                var eventPlayers = await _eventPlayerRepository.FilterByAsync(x => true);
                var existedEventPlayers = eventPlayers.Select(x => x.Id).ToList();
                pendingEvents = events.Where(x => !existedEventPlayers.Contains(x.Id)).ToList();
            }
            
            var index = pendingEvents.Count();
            foreach(var evt in pendingEvents)
            {
                // get player rating
                var ratings = (await GetPlayerRatingChanges(evt)).ToList();

                // insert player update action
                await InsertPlayerAction(ratings, evt);

                ratings.ForEach(x => x.Gender = players.FirstOrDefault(p => p.Id == x.PlayerId)?.Gender);

                await _eventPlayerRepository.UpsertAsync(new TtEventPlayer
                {
                    Id = evt.Id,
                    EventDate = evt.Date,
                    Players = ratings.ToList(),
                    LastUpdated = DateTime.Now,
                    RequireDeltaPush = true,
                    
                }, x=>x.Id == evt.Id);

                //Update event with match statistics
                evt.PlayerCount = ratings.Count;
                await _eventRepository.UpsertAsync(evt, x => x.Id == evt.Id);

                _logger.LogInformation($"{index} - Importing {ratings.Count} player ratings for event {evt.Name}:{evt.Id}...");
                Thread.Sleep(1000);
                index--;
            }
        }

        public async Task Refresh_EventMatchAndPlayers_Counts()
        {
            var events = await _eventRepository.FilterByAsync(c => true);
            var eventPlayers = await _eventPlayerRepository.FilterByAsync(x => true);
            var eventMatches = await _eventMatchesRepository.FilterByAsync(x => true);

            var index = events.Count();
            foreach(var evt in events)
            {
                // count players
                var players = eventPlayers.FirstOrDefault(x => x.Id == evt.Id);
                if(players!= null)
                {
                    evt.PlayerCount = players.Players.Count;
                } else
                {
                    _logger.LogWarning($"{evt.Name}:{evt.Id} players is not imported!");
                }

                var matches = eventMatches.FirstOrDefault(x => x.Id == evt.Id);
                // count matches
                if (matches != null)
                {
                    evt.MatchCount = matches.Matches.Count;
                } else
                {
                    _logger.LogWarning($"{evt.Name}:{evt.Id} matches is not imported!");
                }

                await _eventRepository.UpsertAsync(evt, x => x.Id == evt.Id);
                _logger.LogInformation($"{index} - Counting {evt.Name}:{evt.Id} players and matches.");
                index--;
            }
        }

        public async Task Refresh_EventDate_EventPlayers()
        {
            var eventPlayers = await _eventPlayerRepository.FilterByAsync(x => true);
            var events = await _eventRepository.FilterByAsync(x => true);
            foreach(var ep in eventPlayers)
            {
                var evt = events.FirstOrDefault(x => x.Id == ep.Id);

                if (evt != null)
                {
                    ep.EventDate = evt.Date;
                    ep.LastUpdated = DateTime.Now;
                    ep.RequireDeltaPush = true;

                    await _eventPlayerRepository.UpsertAsync(ep, x => x.Id == ep.Id);
                    _logger.LogWarning($"set date for {ep.Id}");
                } else
                {
                    _logger.LogWarning($"{ep.Id} is not existed");
                }
            }
        }

        public async Task Refresh_Gender_EventPlayers()
        {
            var eventPlayers = await _eventPlayerRepository.FilterByAsync(x => true);
            var players = await _playerRepository.FilterByAsync(x => true);
            foreach (var ep in eventPlayers)
            {
                foreach(var p in ep.Players)
                {
                    var player = players.FirstOrDefault(x => x.Id == p.PlayerId);
                    if (player != null)
                    {
                        p.Gender = player.Gender;
                    }
                }

                ep.LastUpdated = DateTime.Now;
                ep.RequireDeltaPush = true;
                await _eventPlayerRepository.UpsertAsync(ep, x => x.Id == ep.Id);
                _logger.LogWarning($"set gender for event:{ep.Id} players");
            }
        }

        private void EnrichClubInfo(TtEvent evt, List<Club> clubs)
        {
            // transform state value first
            evt.State = evt.State.ToStateShortform();

            // then enrich from clubs
            var club = clubs.FirstOrDefault(x => x.Id == evt.ClubId);
            if (club != null)
            {
                evt.ClubName = club.Name;

                var transformstate = evt.State.ToStateShortform();
                evt.State = transformstate;

                /*
                    {
                      _id: "$State",
                      count: {
                        $sum: 1
                      }
                    }
                 */
                if (string.IsNullOrEmpty(transformstate))
                {
                    //if not able to transform, apply club's state
                    evt.State = club.State.ToStateShortform();
                }
            }
            /*
             Bulk update collection scripts
                db.Events.updateMany({state:"Queensland"}, {$set:{state:"QLD"}})
             */
        }

        private async Task<IList<TtEventPlayerRating>> GetPlayerRatingChanges(TtEvent evt)
        {
            // import summary
            var ratings = await _rcScraper.DownloadEventPlayerRatingsAsync(evt.Id);
            return ratings;
        }

        private async Task InsertPlayerAction(IList<TtEventPlayerRating> ratings, TtEvent evt)
        {
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
        }

        private List<string> SetEventTags(TtEvent evt)
        {
            var tags = new List<string>();

            if (!string.IsNullOrEmpty(evt.Name))
            {
                tags.Add(evt.Name.Trim().ToLower());
            }

            if (!string.IsNullOrEmpty(evt.ClubName))
            {
                tags.Add(evt.ClubName.Trim().ToLower());
            }

            var tagsFromName = evt.Name.GetTagWords();
            tags.AddRange(tagsFromName);

            return tags;
        }

    }
}
