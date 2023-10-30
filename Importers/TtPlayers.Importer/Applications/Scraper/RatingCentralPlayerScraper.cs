using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Configurations;
using TtPlayers.Importer.Domain.CsvMapping;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Extensions;
using TtPlayers.Importer.Infrastructure;

namespace TtPlayers.Importer.Applications.Scraper
{
    public interface IRatingCentralScraper
    {
        Task<IList<Player>> DownloadPlayersAsync();
        Task<PlayerHistory> DownloadPlayerHistoriesAsync(string playerId);

        Task<IList<Club>> DownloadClubsAsync();

        Task<IList<TtEvent>> DownloadEventsAsync();

        Task<IList<TtEventPlayerRatingChange>> DownloadEventPlayerRatingsAsync(string eventId);

        Task<TtEventMatches> DownloadEventMatchesAsync(string eventId);

    }

    public class RatingCentralScraper : IRatingCentralScraper
    {
        private readonly SndttaSettings _settings;
        private readonly ICsvService<PlayerCsvModel, PlayerCsvMapping> _csvPlayerService;
        private readonly ICsvService<PlayerHistoryEntry, PlayerHistoryCsvMapping> _playerHistoryCsvService;
        private readonly ICsvService<Club, ClubCsvMapping> _clubCsvService;
        private readonly ICsvService<TtEventCsvModel, TtEventCsvMapping> _eventCsvService;
        private readonly ICsvService<TtEventPlayerRatingChange, TtEventPlayerRatingChangeCsvMapping> _eventRatingChangeCsvService;
        private readonly ICsvService<TtEventMatchEntry, TtEventMatchCsvMapping> _eventMatchEntryCsvService;

        public RatingCentralScraper(IOptions<SndttaSettings> settings,
            ICsvService<PlayerCsvModel, PlayerCsvMapping> csvPlayerService,
            ICsvService<Club, ClubCsvMapping> clubCsvService,
            ICsvService<PlayerHistoryEntry, PlayerHistoryCsvMapping> playerHistoryCsvService,
            ICsvService<TtEventCsvModel, TtEventCsvMapping> eventCsvService,
            ICsvService<TtEventPlayerRatingChange, TtEventPlayerRatingChangeCsvMapping> eventRatingChangeCsvService,
            ICsvService<TtEventMatchEntry, TtEventMatchCsvMapping> eventMatchEntryCsvService)
        {
            _settings = settings.Value;
            _csvPlayerService = csvPlayerService;
            _playerHistoryCsvService = playerHistoryCsvService;
            _clubCsvService = clubCsvService;
            _eventCsvService = eventCsvService;
            _eventRatingChangeCsvService = eventRatingChangeCsvService;
            _eventMatchEntryCsvService = eventMatchEntryCsvService;
        }

        public async Task<IList<Player>> DownloadPlayersAsync()
        {
            var url = _settings.RcAusPlayerListUrl;
            var csvPlayers = await _csvPlayerService.DownloadCsvAsync(url);

            var players = csvPlayers.Select(x => new Player
            {
                Id = x.Id,
                FirstName = x.Name.ToFirstName().Trim(),
                LastName = x.Name.ToLastName().Trim(),
                FullName = x.Name.ToFirstLastName().Trim(),
                Rating = x.Rating,
                StDev = x.StDev,
                PrimaryClubId = x.PrimaryClubId,
                State = x.Province,
                Country = x.Country,
                Gender = x.Sex,
                TtaId = x.TTA_ID,
                LastPlayed = x.LastPlayed,
                LastEventId = x.LastEventId,
                LastUpdated = DateTime.Now
            }).ToList();

            return players;
        }

        public async Task<PlayerHistory> DownloadPlayerHistoriesAsync(string playerId)
        {
            var url = _settings.RcPlayerHistoryUrl.Replace("{0}", playerId);
            var entries = await _playerHistoryCsvService.DownloadCsvAsync(url);
            var history = new PlayerHistory
            {
                Id = playerId,
                History = entries,
                LastUpdated = DateTime.Now
            };

            return history;
        }

        public async Task<IList<Club>> DownloadClubsAsync()
        {
            var url = _settings.RcClubListUrl;
            var clubs = await _clubCsvService.DownloadCsvAsync(url);
            return clubs;
        }

        public async Task<IList<TtEvent>> DownloadEventsAsync()
        {
            var url = _settings.RcAusEventListUrl;
            var csvEvents = await _eventCsvService.DownloadCsvAsync(url);

            var events = csvEvents.Select(x => new TtEvent
            {
                Id = x.Id,
                Name = x.Name,
                Date = x.Date,
                Director = x.Director,
                State = x.Province,
                Country = x.Country,
                //SubmittedDate = x.SubmittedDate,
                //RevisedDate = x.RevisedDate,
                //LastProcessedDate = x.LastProcessedDate,
                ClubId = x.ClubId,
                LastUpdated = DateTime.Now
            }).ToList();

            return events;
        }

        public async Task<IList<TtEventPlayerRatingChange>> DownloadEventPlayerRatingsAsync(string eventId)
        {
            //download json event player rating changes
            var url = _settings.RcAusEventSummaryUrl.Replace("{0}", eventId);
            var ratings = await _eventRatingChangeCsvService.DownloadCsvAsync(url);
            return ratings;
        }

        public async Task<TtEventMatches> DownloadEventMatchesAsync(string eventId)
        {
            //download json event matches
            var url = _settings.RcAusEventDetailUrl.Replace("{0}", eventId);
            var matchEntries = await _eventMatchEntryCsvService.DownloadCsvAsync(url);

            var matches = new TtEventMatches
            {
                Id = eventId,
                Matches = matchEntries,
                RequireTransform = true,
                LastUpdated = DateTime.Now,
            };

            return matches;
        }

    }
}
