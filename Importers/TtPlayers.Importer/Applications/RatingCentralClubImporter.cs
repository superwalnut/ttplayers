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
using TtPlayers.Importer.Extensions;
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
                var importedClubs = await _clubRepository.FilterByAsync(x => true);

                _logger.LogInformation($"Found {clubs.Count} clubs");
                var index = clubs.Count;
                foreach(var club in clubs)
                {
                    var imported = importedClubs.FirstOrDefault(x => x.Id == club.Id);
                    if (imported != null)
                    {
                        if (string.IsNullOrEmpty(club.Address1))
                        {
                            club.Address1 = imported.Address1;
                        }

                        if(string.IsNullOrEmpty(club.Address2))
                        {
                            club.Address2 = imported.Address2;
                        }

                        if(string.IsNullOrEmpty(club.City))
                        {
                            club.City = imported.City;
                        }

                        if (string.IsNullOrEmpty(club.State))
                        {
                            club.State = imported.State;
                        }

                        if (string.IsNullOrEmpty(club.PostalCode))
                        {
                            club.PostalCode = imported.PostalCode;
                        }

                        if (string.IsNullOrEmpty(club.Email))
                        {
                            club.Email = imported.Email;
                        }

                        if(string.IsNullOrEmpty(club.Website))
                        {
                            club.Website = imported.Website;
                        }

                        if(string.IsNullOrEmpty(club.Phone))
                        {
                            club.Phone = imported.Phone;
                        }
                    }

                    if(string.IsNullOrEmpty(club.Address1) && string.IsNullOrEmpty(club.City) && 
                        string.IsNullOrEmpty(club.Email) && string.IsNullOrEmpty(club.Phone) && 
                        string.IsNullOrEmpty(club.Website) && string.IsNullOrEmpty(club.PostalCode))
                    {
                        club.Status = "Inactive";
                    }

                    //update tags
                    club.Tags = club.GetClubNameComboTags();

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
