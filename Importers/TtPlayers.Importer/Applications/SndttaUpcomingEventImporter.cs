﻿using CsvHelper;
using CsvHelper.Configuration;
using Microsoft.Extensions.Logging;
using System.Globalization;
using TtPlayers.Importer.data;
using TtPlayers.Importer.Domain.CsvMapping;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;

namespace TtPlayers.Importer.Applications
{
    public interface ISndttaUpcomingEventImporter
    {
        Task Import();
    }

    public class SndttaUpcomingEventImporter : ISndttaUpcomingEventImporter
    {
        private readonly ILogger<SndttaUpcomingEventImporter> _logger;
        private readonly IDocumentRepository<SndttaUpcomingEvent> _upcomingEventRepository;

        public SndttaUpcomingEventImporter(IDocumentRepository<SndttaUpcomingEvent> upcomingEventRepository, ILogger<SndttaUpcomingEventImporter> logger)
        {
            _upcomingEventRepository= upcomingEventRepository;
            _logger = logger;
        }

        public async Task Import()
        {
            await _upcomingEventRepository.DeleteManyAsync(x => true);

            var config = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                HasHeaderRecord = true,
                Delimiter = ",",
                IgnoreBlankLines = true,
                MissingFieldFound = null,
                ReadingExceptionOccurred = null,
            };

            var content = SndttaResource.Upcoming;

            using (var reader = new StringReader(content))
            using (var csvReader = new CsvReader(reader, config))
            {
                csvReader.Context.RegisterClassMap<SndttaUpcomingEventCsvMapping>();
                var models = csvReader.GetRecords<SndttaUpcomingEvent>().ToList();
                _logger.LogInformation($"import {models.Count} upcoming sndtta events.");

                var teamNames = GetTeamNames();
                foreach (var model in models)
                {
                    model.HomeTeamName = GetFullTeamName(teamNames, model.HomeTeamName);
                    model.AwayTeamName = GetFullTeamName(teamNames, model.AwayTeamName);
                }

                await _upcomingEventRepository.InsertManyAsync(models);
            }
        }

        private string GetFullTeamName(List<TeamNameCsvModel> teams, string shortName)
        {
            var selected = teams.FirstOrDefault(x=>x.ShortName == shortName);
            if (selected != null)
            {
                return selected.Name;
            }

            return shortName;
        }

        private List<TeamNameCsvModel> GetTeamNames()
        {
            var config = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                HasHeaderRecord = true,
                Delimiter = ",",
                IgnoreBlankLines = true,
                MissingFieldFound = null,
                ReadingExceptionOccurred = null,
            };

            var content = SndttaResource.teamName;

            using (var reader = new StringReader(content))
            using (var csvReader = new CsvReader(reader, config))
            {
                csvReader.Context.RegisterClassMap<TeamNameCsvMapping>();
                var models = csvReader.GetRecords<TeamNameCsvModel>().ToList();
                return models;
            }
        }
    }
}
