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

    [Obsolete]
    public class RatingCentralPlayerHistoryImporter: RatingCentralImporterBase, IRatingCentralPlayerHistoryImporter
    {
        private readonly SndttaSettings _settings;
        private readonly ILogger<RatingCentralPlayerHistoryImporter> _logger;
        private readonly IDocumentRepository<PlayerHistory> _playerHistoryRepository;
        private readonly IDocumentRepository<PlayerUpdate> _playerUpdateRepository;
        private readonly ICsvService<PlayerHistoryEntry, PlayerHistoryCsvMapping> _playerHistoryCsvService;
        private readonly ICsvService<PlayerCsvModel, PlayerCsvMapping> _csvPlayerService;

        public RatingCentralPlayerHistoryImporter(IOptions<SndttaSettings> settings,
            IDocumentRepository<PlayerHistory> playerHistoryRepository,
            IDocumentRepository<PlayerUpdate> playerUpdateRepository,
            ICsvService<PlayerHistoryEntry, PlayerHistoryCsvMapping> playerHistoryCsvService,
            ICsvService<PlayerCsvModel, PlayerCsvMapping> csvPlayerService,
            ILogger<RatingCentralPlayerHistoryImporter> logger)
            : base(logger)
        {
            _settings = settings.Value;
            _playerHistoryRepository = playerHistoryRepository;
            _playerUpdateRepository = playerUpdateRepository;
            _playerHistoryCsvService= playerHistoryCsvService;
            _csvPlayerService = csvPlayerService;
            _logger = logger;
        }

        public async Task Import()
        {
            var url = _settings.RcAusPlayerListUrl;
            var csvPlayers = await _csvPlayerService.DownloadCsvAsync(url);


            var playerRequireUpdates = await _playerUpdateRepository.FilterByAsync(x => true);
            var requiredPlayerIds = playerRequireUpdates.Select(x => x.Id).ToList();

            var pendingPlayers = csvPlayers.Where(x => requiredPlayerIds.Contains(x.Id)).ToList();
            _logger.LogInformation($"Found {pendingPlayers.Count} players to import.");
            var index = pendingPlayers.Count;

            foreach (var player in pendingPlayers)
            {
                _logger.LogInformation($"{index} - Importing {player.Name}:{player.Id} history...");
                await ImportSinglePlayerHistory(player.Id);
                // remove from player-update table
                await _playerUpdateRepository.DeleteByIdAsync(player.Id);

                Thread.Sleep(100);
                index--;
            }
        }

        private async Task ImportSinglePlayerHistory(string playerId)
        {
            // download player history json
            var url = _settings.RcPlayerHistoryUrl.Replace("{0}", playerId);
            var entries = await _playerHistoryCsvService.DownloadCsvAsync(url);
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
