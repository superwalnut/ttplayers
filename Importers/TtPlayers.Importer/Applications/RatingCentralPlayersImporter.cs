using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Applications.Base;
using TtPlayers.Importer.Configurations;
using TtPlayers.Importer.Domain.CsvMapping;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;
using TtPlayers.Importer.Extensions;
using TtPlayers.Importer.Infrastructure;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralPlayersImporter
    {
        Task Import();
    }

    public class RatingCentralPlayersImporter : RatingCentralImporterBase, IRatingCentralPlayersImporter
    {
        private readonly SndttaSettings _settings;
        private readonly ILogger<RatingCentralPlayersImporter> _logger;
        private readonly IDocumentRepository<Player> _playerRepository;
        private readonly IDocumentRepository<PlayerHistory> _playerHistoryRepository;
        private readonly IDocumentRepository<Match> _matchRepository;
        private readonly ICsvService<PlayerCsvModel, PlayerCsvMapping> _csvPlayerService;
        private readonly ISndttaPlayerScraper _sndttaScraper;
        public RatingCentralPlayersImporter(IOptions<SndttaSettings> settings, 
            IDocumentRepository<Player> playerRepository,
            IDocumentRepository<PlayerHistory> playerHistoryRepository,
            IDocumentRepository<Match> matchRepository,
            ICsvService<PlayerCsvModel, PlayerCsvMapping> csvPlayerService,
            ISndttaPlayerScraper sndttaScraper,
            ILogger<RatingCentralPlayersImporter> logger)
            :base(logger)
        {
            _settings = settings.Value;
            _playerRepository = playerRepository;
            _playerHistoryRepository = playerHistoryRepository;
            _matchRepository = matchRepository;
            _csvPlayerService = csvPlayerService;
            _sndttaScraper = sndttaScraper;
            _logger = logger;
        }

        public async Task Import()
        {
            var url = _settings.RcAusPlayerListUrl;
            var csvPlayers = _csvPlayerService.DownloadCsv(url);

            var players = csvPlayers.Select(x => new Player
            {
                Id= x.Id,
                FirstName = x.Name.ToFirstName().Trim(),
                LastName = x.Name.ToLastName().Trim(),
                FullName = x.Name.ToFirstLastName().Trim(),
                Rating = x.Rating,
                StDev= x.StDev,
                PrimaryClubId = x.PrimaryClubId,
                State = x.Province,
                Country= x.Country,
                Gender = x.Sex,
                TtaId = x.TTA_ID,
                LastPlayed = x.LastPlayed,
                LastEventId = x.LastEventId,
                LastUpdated = DateTime.Now
            });

            if (players.Any())
            {
                var index = players.Count();

                //var importedPlayers = await _playerRepository.FilterByAsync(x => true);

                var sndttaPlayers = _sndttaScraper.GetPlayers();

                foreach (var player in players)
                {
                    _logger.LogInformation($"{index} - Importing player {player.FullName}:{player.Id}...");

                    //if it is sndtta player, update team & division
                    var sndtta = sndttaPlayers.FirstOrDefault(x=>x.Id == player.Id);
                    if(sndtta != null)
                    {
                        player.IsSndtta = true;
                        player.Division = sndtta.Division;
                        player.Team = sndtta.Team;
                    }

                    await UpdatePlayer(player);

                    //var importedPlayer = importedPlayers.FirstOrDefault(x => x.Id == player.Id);
                    //if (importedPlayer != null)
                    //{
                    //    //found in database, if player rating has changed or player last-played date has changed, we need to upsert
                    //    if (player.Rating != importedPlayer.Rating || player.LastPlayed != importedPlayer.LastPlayed)
                    //    {
                    //        await UpdatePlayer(player);
                    //    }
                    //    else
                    //    {
                    //        _logger.LogInformation($"Player {player.FullName}:{player.Id} remain unchanged.");
                    //    }
                    //}
                    //else
                    //{
                    //    //not exist, go straight import
                    //    await UpdatePlayer(player);
                    //}
                    index--;
                }
                _logger.LogInformation($"Finish upserting {players.Count()} players.");
            }
        }

        private async Task UpdatePlayer(Player player)
        {
            await UpdatePlayerSummary(player);

            player.RequireDeltaPush = true;
            await _playerRepository.UpsertAsync(player, x => x.Id == player.Id);
            _logger.LogInformation($"Player {player.FullName}:{player.Id} updated.");
        }

        private async Task UpdatePlayerSummary(Player player)
        {
            var playerHistory = await _playerHistoryRepository.FindOneAsync(x => x.Id == player.Id);
            if(playerHistory != null)
            {
                var histories = playerHistory.History.Where(x => x.EventDate > DateTime.Now.AddMonths(-6)).OrderByDescending(x => x.EventDate);

                player.PlayedEventsLast6Mth = histories.Count();
                player.RatingChangesLast6Mth = histories.Sum(x => x.PointChange);
                player.LastPlayedEvent = histories.FirstOrDefault()?.EventName;
                player.LastPlayedEventRatingChange = histories.FirstOrDefault()?.PointChange;
            }

            var matches = await _matchRepository.FilterByAsync(x => x.PlayerIds.Contains(player.Id));
            if(matches.Any())
            {
                var matchPlayed = matches.Count(x => x.MatchDate > DateTime.Now.AddMonths(-6));
                var wins = matches.Count(x => x.WinnerId == player.Id);
                var loses = matches.Count(x => x.LoserId == player.Id);

                player.PlayedMatchesLast6Mth = matchPlayed;
                player.Wins = wins;
                player.Loses = loses;
            }
            _logger.LogInformation($"Updated player Summary...");
        }
    }
}
