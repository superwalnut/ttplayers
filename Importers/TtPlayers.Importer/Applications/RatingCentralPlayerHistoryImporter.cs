using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using TtPlayers.Importer.Applications.Base;
using TtPlayers.Importer.Configurations;
using TtPlayers.Importer.Domain.CsvMapping;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;
using TtPlayers.Importer.Infrastructure;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralPlayerHistoryImporter
    {
        Task Import();
    }

    public class RatingCentralPlayerHistoryImporter: RatingCentralImporterBase, IRatingCentralPlayerHistoryImporter
    {
        private readonly SndttaSettings _settings;
        private readonly ILogger<RatingCentralPlayerHistoryImporter> _logger;
        private readonly IDocumentRepository<PlayerHistory> _playerHistoryRepository;
        private readonly IDocumentRepository<Player> _playerRepository;
        private readonly ICsvService<PlayerHistoryEntry, PlayerHistoryCsvMapping> _playerHistoryCsvService;

        public RatingCentralPlayerHistoryImporter(IOptions<SndttaSettings> settings,
            IDocumentRepository<PlayerHistory> playerHistoryRepository,
            IDocumentRepository<Player> playerRepository,
            ICsvService<PlayerHistoryEntry, PlayerHistoryCsvMapping> playerHistoryCsvService,
            ILogger<RatingCentralPlayerHistoryImporter> logger)
            : base(logger)
        {
            _settings = settings.Value;
            _playerHistoryRepository = playerHistoryRepository;
            _playerRepository = playerRepository;
            _playerHistoryCsvService= playerHistoryCsvService;
            _logger = logger;
        }

        public async Task Import()
        {
            var players = await _playerRepository.FilterByAsync(x => x.IsSndtta || x.LastPlayed > DateTime.Now.AddMonths(-6));
            _logger.LogInformation($"Found {players.Count} players to import.");
            var index = players.Count;

            foreach (var player in players)
            {
                _logger.LogInformation($"{index} - Importing {player.FullName}:{player.Id} history...");
                await ImportSinglePlayerHistory(player.Id);
                Thread.Sleep(100);
                index--;
            }
        }

        private async Task ImportSinglePlayerHistory(string playerId)
        {
            // download player history json
            var url = _settings.RcPlayerHistoryUrl.Replace("{0}", playerId);
            var entries = _playerHistoryCsvService.DownloadCsv(url);
            var history = new PlayerHistory
            {
                Id = playerId,
                History = entries,
                LastUpdated = DateTime.Now
            };

            var importedPlayerHistory = await _playerHistoryRepository.FindOneAsync(x => x.Id == playerId);

            if (importedPlayerHistory == null || importedPlayerHistory.History.Count != entries.Count)
            {
                // if never imported before OR imported history != current history, do an update
                history.RequireDeltaPush = true;
                await _playerHistoryRepository.UpsertAsync(history, x => x.Id == playerId);
                _logger.LogInformation($"Imported {entries.Count} match records for player:{playerId}.");
            }
            else
            {
                _logger.LogInformation($"Player:{playerId} history remain unchanged.");
            }
        }
    }
}
