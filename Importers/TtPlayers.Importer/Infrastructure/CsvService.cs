using CsvHelper;
using CsvHelper.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.CsvMapping;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Infrastructure
{
    public interface ICsvService<TEntity, TMapping>
        where TEntity : class
        where TMapping : ClassMap<TEntity>
    {
        Task<List<TEntity>> DownloadCsvAsync(string url);
    }

    public class CsvService<TEntity, TMapping> : ICsvService<TEntity, TMapping>
        where TEntity : class
        where TMapping : ClassMap<TEntity>
    {
        private readonly ILogger<CsvService<TEntity, TMapping>> _logger;
        private readonly IHttpDownloader _httpDownloader;

        public CsvService(IHttpDownloader httpDownloader, ILogger<CsvService<TEntity, TMapping>> logger)
        {
            _httpDownloader = httpDownloader;
            _logger = logger;
        }

        public async Task<List<TEntity>> DownloadCsvAsync(string url)
        {
            //download json and convert models
            var csv = await _httpDownloader.DownloadByGet(url);

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
                csvReader.Context.RegisterClassMap<TMapping>();
                var models = csvReader.GetRecords<TEntity>().ToList();
                return models;
            }
        }
    }
}
