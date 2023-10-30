using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Applications.Scraper;
using TtPlayers.Importer.Configurations;
using TtPlayers.Importer.Domain.CsvMapping;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;
using TtPlayers.Importer.Infrastructure;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralClubImporter
    {
        Task Import();
    }

    public class RatingCentralClubImporter : IRatingCentralClubImporter
    {
        private readonly ILogger<RatingCentralClubImporter> _logger;
        private readonly IDocumentRepository<Club> _clubRepository;
        private readonly IRatingCentralScraper _rcScraper;

        public RatingCentralClubImporter(ILogger<RatingCentralClubImporter> logger,
            IRatingCentralScraper rcScraper,
            IDocumentRepository<Club> clubRepository)
        {
            _logger = logger;
            _clubRepository = clubRepository;
            _rcScraper = rcScraper;
        }

        public async Task Import()
        {
            var clubs = await _rcScraper.DownloadClubsAsync();

            if (clubs.Any())
            {
                _logger.LogInformation($"Found {clubs.Count} clubs");
                var index = clubs.Count;
                foreach(var club in clubs)
                {
                    club.LastUpdated = DateTime.Now;
                    club.RequireDeltaPush = true;
                    await _clubRepository.UpsertAsync(club, x=>x.Id == club.Id);
                    _logger.LogInformation($"{index} - Club {club.Name}:{club.Id} updated.");
                    index--;
                }
            }
        }
    }
}
