using CsvHelper.Configuration;
using CsvHelper;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
        private readonly IHttpDownloader _downloader;

        public RatingCentralPlayerHistoryImporter(IOptions<SndttaSettings> settings, IHttpDownloader downloader,
            IDocumentRepository<PlayerHistory> playerHistoryRepository,
            IDocumentRepository<Player> playerRepository,
            ILogger<RatingCentralPlayerHistoryImporter> logger)
            : base(logger, downloader)
        {
            _settings = settings.Value;
            _playerHistoryRepository = playerHistoryRepository;
            _playerRepository = playerRepository;
            _downloader = downloader;
            _logger = logger;
        }

        public async Task Import()
        {
            var players = await _playerRepository.FilterByAsync(x => x.IsSndtta);
            foreach(var player in players)
            {
                await ImportSinglePlayerHistory(player.Id);
                Thread.Sleep(100);
            }
        }

        private async Task ImportSinglePlayerHistory(string playerId)
        {
            var url = _settings.RcPlayerHistoryUrl.Replace("{0}", playerId);
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
                csvReader.Context.RegisterClassMap<PlayerHistoryCsvMapping>();
                var models = csvReader.GetRecords<PlayerHistoryEntry>().ToList();

                var matches = new PlayerHistory
                {
                    Id = playerId,
                    History = models
                };
                _logger.LogInformation($"Start importing {models.Count} records for player:{playerId}.");

                await _playerHistoryRepository.UpsertAsync(matches, x => x.Id == playerId);
            }
        }
    }
}
