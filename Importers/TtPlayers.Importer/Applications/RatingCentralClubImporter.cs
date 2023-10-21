﻿using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
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
        private readonly SndttaSettings _settings;
        private readonly ILogger<RatingCentralClubImporter> _logger;
        private readonly ICsvService<Club, ClubCsvMapping> _clubCsvService;
        private readonly IDocumentRepository<Club> _clubRepository;

        public RatingCentralClubImporter(SndttaSettings settings, ILogger<RatingCentralClubImporter> logger,
            ICsvService<Club, ClubCsvMapping> clubCsvService,
            IDocumentRepository<Club> clubRepository)
        {
            _clubCsvService= clubCsvService;
            _logger = logger;
            _clubRepository = clubRepository;
            _settings = settings;
        }

        public async Task Import()
        {
            var url = _settings.RcClubListUrl;
            var clubs = _clubCsvService.DownloadCsv(url);

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
