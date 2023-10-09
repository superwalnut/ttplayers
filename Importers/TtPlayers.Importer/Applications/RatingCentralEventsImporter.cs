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

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralEventsImporter
    {
        Task ImportEvents();
        Task ImportEventSummaries();
        Task ImportEventMatches();
    }

    public class RatingCentralEventsImporter : RatingCentralImporterBase, IRatingCentralEventsImporter
    {
        private readonly SndttaSettings _settings;
        private readonly ILogger<RatingCentralEventsImporter> _logger;
        private readonly IDocumentRepository<TtEvent> _eventRepository;
        private readonly IDocumentRepository<TtEventMatches> _eventMatchesRepository;
        private readonly IHttpDownloader _downloader;

        public RatingCentralEventsImporter(IOptions<SndttaSettings> settings, IHttpDownloader downloader, 
            IDocumentRepository<TtEvent> eventRepository,
            IDocumentRepository<TtEventMatches> eventMatchesRepository,
            ILogger<RatingCentralEventsImporter> logger)
            :base(logger, downloader)
        {
            _settings = settings.Value;
            _eventRepository = eventRepository;
            _eventMatchesRepository= eventMatchesRepository;
            _downloader = downloader;
            _logger = logger;
        }

        public async Task ImportEvents()
        {
            var trNodes = GetTrNodes(_settings.RcAusEventListUrl);
            if (trNodes == null)
                return;

            var ttEvents = new List<TtEvent>();
            foreach (var trNode in trNodes)
            {
                if (trNode.ChildNodes.Count == 3)
                {
                    var dateNode = trNode.ChildNodes[0];
                    var nameNode = trNode.ChildNodes[1];
                    var clubNode = trNode.ChildNodes[2];

                    var eventName = nameNode.InnerText.Trim();
                    var clubName = clubNode.InnerText.Trim();
                    var eventId = nameNode.FirstChild.Attributes["href"].Value.ToEventId();
                    var clubId = clubNode.FirstChild?.Attributes["href"]?.Value?.ToClubId();
                    DateTime.TryParse(dateNode.InnerText.Trim(), out var eventDate);

                    ttEvents.Add(new TtEvent
                    {
                        Id = eventId,
                        Name= eventName,
                        Date = eventDate,
                        ClubName = clubName,
                        ClubId = clubId,
                    });

                    _logger.LogInformation($"Event {eventName} added with ID {eventId} of date {eventDate.ToString("yyyy-MM-dd")}.");
                }
            }

            if (ttEvents.Any())
            {
                foreach (var evt in ttEvents)
                {
                    await _eventRepository.UpsertAsync(evt, x => x.Id == evt.Id);
                }
                _logger.LogInformation($"Finish upserting {ttEvents.Count} events.");
            }            
        }

        public async Task ImportEventMatches()
        {
            var events = await _eventRepository.FilterByAsync(c => true);
            _logger.LogInformation($"Start importing event games for {events.Count} events.");
            foreach (var evt in events)
            {
                await ImportSingleEventMatches(evt.Id);
                Thread.Sleep(500);
            }
        }

        public async Task ImportEventSummaries()
        {
            var events = await _eventRepository.FilterByAsync(c=>c.PlayerRatings == null);
            _logger.LogInformation($"Start importing event summaries for {events.Count} events.");
            foreach (var evt in events)
            {
                if (evt.PlayerRatings!= null && evt.PlayerRatings.Any())
                {
                    continue;
                }

                var ratings = ImportEventPlayerRatings(evt.Id);
                evt.PlayerRatings= ratings;

                await _eventRepository.UpsertAsync(evt, x => x.Id == evt.Id);
                _logger.LogInformation($"Finish upsert event summary for {evt.Name}:{evt.Id} on {evt.Date.ToShortDateString()} with {ratings.Count} player rating changes.");
                Thread.Sleep(1000);
            }
        }

        private List<TtEventPlayerRatingChange> ImportEventPlayerRatings(string eventId)
        {
            var ttRatings = new List<TtEventPlayerRatingChange>();
            var trNodes = GetTrNodes($"{_settings.RcAusEventSummaryUrl}{eventId}");
            if (trNodes == null)
                return ttRatings;

            foreach (var trNode in trNodes)
            {
                if (trNode.ChildNodes.Count == 5)
                {
                    var idNode = trNode.ChildNodes[0];
                    var nameNode = trNode.ChildNodes[1];
                    var initRatingNode = trNode.ChildNodes[2];
                    var pointChangeNode = trNode.ChildNodes[3];
                    var finalRatingNode = trNode.ChildNodes[4];

                    var fullName = nameNode.InnerText.Trim().ToFirstLastName();
                    var id = idNode.InnerText.Trim();
                    var initRating = initRatingNode.InnerText.Trim();
                    var point = pointChangeNode.InnerText.Trim();
                    var finalRating = finalRatingNode.InnerText.Trim();

                    ttRatings.Add(new TtEventPlayerRatingChange
                    {
                        PlayerId = id,
                        PlayerName = fullName,
                        InitialRating = initRating,
                        PointChange = point,
                        FinalRating = finalRating,
                    });

                    _logger.LogInformation($"PlayerRatingChange {fullName} added with ID {id} from {initRating} to {finalRating}.");
                }
            }

            return ttRatings;
        }

        private async Task ImportSingleEventMatches(string eventId)
        {
            var url = _settings.RcAusEventDetailUrl.Replace("{0}", eventId);
            var csv = _downloader.DownloadByGet(url);

            var config = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                HasHeaderRecord = true,
                Delimiter = ",",
                IgnoreBlankLines = true,
                MissingFieldFound = null,
                ReadingExceptionOccurred = null,
            };

            using (var reader = new StringReader(csv))
            using (var csvReader = new CsvReader(reader, config))
            {
                csvReader.Context.RegisterClassMap<TtEventMatchCsvMapping>();
                var models = csvReader.GetRecords<TtEventMatch>().ToList();

                var matches = new TtEventMatches { 
                    Id= eventId,
                    Matches= models
                };
                _logger.LogInformation($"Start importing {models.Count} matches for event:{eventId}.");

                await _eventMatchesRepository.UpsertAsync(matches, x => x.Id == eventId);
            }
        }
    }
}
