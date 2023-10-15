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

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralEventsImporter
    {
        Task ImportEvents();
        Task ImportEventMatches();
    }

    public class RatingCentralEventsImporter : RatingCentralImporterBase, IRatingCentralEventsImporter
    {
        private readonly SndttaSettings _settings;
        private readonly ILogger<RatingCentralEventsImporter> _logger;
        private readonly IDocumentRepository<TtEvent> _eventRepository;
        private readonly IDocumentRepository<TtEventMatches> _eventMatchesRepository;
        private readonly ICsvService<TtEventMatchEntry, TtEventMatchCsvMapping> _eventMatchEntryCsvService;
        private readonly ICsvService<TtEventPlayerRatingChange, TtEventPlayerRatingChangeCsvMapping> _eventRatingChangeCsvService;
        private readonly ICsvService<TtEventCsvModel, TtEventCsvMapping> _eventCsvService;

        public RatingCentralEventsImporter(IOptions<SndttaSettings> settings, IHttpDownloader downloader, 
            IDocumentRepository<TtEvent> eventRepository,
            IDocumentRepository<TtEventMatches> eventMatchesRepository,
            ICsvService<TtEventMatchEntry, TtEventMatchCsvMapping> eventMatchEntryCsvService,
            ICsvService<TtEventPlayerRatingChange, TtEventPlayerRatingChangeCsvMapping> eventRatingChangeCsvService,
            ICsvService<TtEventCsvModel, TtEventCsvMapping> eventCsvService,
            ILogger<RatingCentralEventsImporter> logger)
            :base(logger)
        {
            _settings = settings.Value;
            _eventRepository = eventRepository;
            _eventMatchesRepository= eventMatchesRepository;
            _eventMatchEntryCsvService= eventMatchEntryCsvService;
            _eventRatingChangeCsvService= eventRatingChangeCsvService;
            _eventCsvService= eventCsvService;
            _logger = logger;
        }

        public async Task ImportEvents()
        {
            var url = _settings.RcAusEventListUrl;
            var csvEvents = _eventCsvService.DownloadCsv(url);

            var events = csvEvents.Select(x => new TtEvent
            {
                Id = x.Id,
                Name = x.Name,
                Date = x.Date,
                Director= x.Director,
                State = x.Province,
                Country = x.Country,
                //SubmittedDate = x.SubmittedDate,
                //RevisedDate = x.RevisedDate,
                //LastProcessedDate = x.LastProcessedDate,
                ClubId= x.ClubId,
                LastUpdated = DateTime.Now
            });


            if (events.Any())
            {
                var importedEvents = await _eventRepository.FilterByAsync(x => true);
                var pendingEvents = importedEvents.Except(events);
                _logger.LogInformation($"There are {events.Count()} events found, need to import {pendingEvents.Count()} events.");

                var index = 0;
                foreach (var evt in pendingEvents)
                {
                    _logger.LogInformation($"{index} - Importing event {evt.Name}:{evt.Id}...");

                    // import summary
                    var ratings = ImportEventPlayerRatings(evt.Id);
                    _logger.LogInformation($"Importing {ratings.Count} player ratings for event {evt.Name}:{evt.Id}...");
                    Thread.Sleep(1000);

                    // update
                    evt.PlayerRatings = ratings;
                    evt.RequireDeltaPush = true;
                    await _eventRepository.UpsertAsync(evt, x => x.Id == evt.Id);

                    index++;
                        // if event is already imported, we want to check if anything changes for the events during the last 10 days
                        //var lastWeekEvents = importedEvents.OrderByDescending(x=>x.Date > DateTime.Now.AddDays(-10));
                        //var existedEvent = lastWeekEvents.FirstOrDefault(x => x.Id == evt.Id);
                        //if(existedEvent != null)
                        //{
                        //    // import summary
                        //    var ratings = ImportEventPlayerRatings(evt.Id);
                        //    _logger.LogInformation($"Importing {ratings.Count} player ratings for event {evt.Name}:{evt.Id}...");

                        //    Thread.Sleep(500);

                        //    // update
                        //    evt.PlayerRatings = ratings;
                        //    evt.RequireDeltaPush = true;
                        //    await _eventRepository.UpsertAsync(evt, x => x.Id == evt.Id);
                        //    _logger.LogInformation($"event {evt.Name}:{evt.Id} within the last 10 days refreshed.");
                        //}
                        //else
                        //{
                        //}
                }
                _logger.LogInformation($"Finish upserting {pendingEvents.Count()} events.");
            }
        }

        public async Task ImportEventMatches()
        {
            var events = await _eventRepository.FilterByAsync(c => true);

            var eventMatches = await _eventMatchesRepository.FilterByAsync(c => true);
            var importedEventIds = eventMatches.Select(x => x.Id).ToList();

            var pendingEvents = events.Where(x => !importedEventIds.Contains(x.Id) || x.Date > DateTime.Now.AddDays(-10));
            _logger.LogInformation($"There are {events.Count()} events in total, need to import {pendingEvents.Count()} events.");
            var index = 0;
            foreach (var evt in pendingEvents)
            {
                await ImportSingleEventMatches(evt);
                _logger.LogInformation($"{index} - importing event matches for event - {evt.Name}:{evt.Id}.");
                Thread.Sleep(1000);
                index++;
            }
        }

        private List<TtEventPlayerRatingChange> ImportEventPlayerRatings(string eventId)
        {
            //download json event player rating changes
            var url = _settings.RcAusEventSummaryUrl.Replace("{0}", eventId);
            var ratings = _eventRatingChangeCsvService.DownloadCsv(url);
            return ratings;
        }

        private async Task ImportSingleEventMatches(TtEvent evt)
        {
            //download json event matches
            var url = _settings.RcAusEventDetailUrl.Replace("{0}", evt.Id);
            var matchEntries = _eventMatchEntryCsvService.DownloadCsv(url);
            
            var matches = new TtEventMatches { 
                Id= evt.Id,
                Matches= matchEntries
            };
            _logger.LogInformation($"Start importing {matchEntries.Count} matches for event:{evt.Id}.");

            await _eventMatchesRepository.UpsertAsync(matches, x => x.Id == evt.Id);
        }
    }
}
