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
        private readonly ICsvService<PlayerCsvModel, PlayerCsvMapping> _csvPlayerService;
        public RatingCentralPlayersImporter(IOptions<SndttaSettings> settings, 
            IDocumentRepository<Player> playerRepository,
            ICsvService<PlayerCsvModel, PlayerCsvMapping> csvPlayerService,
            ILogger<RatingCentralPlayersImporter> logger)
            :base(logger)
        {
            _settings = settings.Value;
            _playerRepository = playerRepository;
            _csvPlayerService = csvPlayerService;
            _logger = logger;
        }

        public async Task Import()
        {
            var url = _settings.RcAusPlayerListUrl;
            var csvPlayers = _csvPlayerService.DownloadCsv(url);

            var players = csvPlayers.Select(x => new Player
            {
                Id= x.Id,
                FirstName = x.Name.ToFirstName(),
                LastName = x.Name.ToLastName(),
                FullName = x.Name.ToFirstLastName(),
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
                var importedPlayers = await _playerRepository.FilterByAsync(x => true);

                foreach (var player in players)
                {
                    _logger.LogInformation($"Importing player {player.FullName}:{player.Id}...");

                    var importedPlayer = importedPlayers.FirstOrDefault(x => x.Id == player.Id);

                    if(importedPlayer!= null)
                    {
                        //found in database, if player rating has changed or player last-played date has changed, we need to upsert
                        if(player.Rating != importedPlayer.Rating || player.LastPlayed != importedPlayer.LastPlayed)
                        {
                            player.RequireDeltaPush = true;
                            await _playerRepository.UpsertAsync(player, x => x.Id == player.Id);
                        }
                        else
                        {
                            _logger.LogInformation($"Player {player.FullName}:{player.Id} remain unchanged.");
                        }
                    }
                    else
                    {
                        //not exist, go straight import
                        player.RequireDeltaPush = true;
                        await _playerRepository.UpsertAsync(player, x => x.Id == player.Id);
                    }
                }
                _logger.LogInformation($"Finish upserting {players.Count()} players.");
            }
        }
    }
}
