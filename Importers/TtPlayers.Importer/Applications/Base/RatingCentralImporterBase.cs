using CsvHelper.Configuration;
using CsvHelper;
using HtmlAgilityPack;
using Microsoft.Extensions.Logging;
using System.Globalization;
using System.Reflection;
using System.Text;
using TtPlayers.Importer.Infrastructure;
using TtPlayers.Importer.Domain.CsvMapping;

namespace TtPlayers.Importer.Applications.Base
{
    public abstract class RatingCentralImporterBase
    {
        private readonly ILogger _logger;
        public RatingCentralImporterBase(ILogger logger)
        {
            _logger = logger;
        }
    }
}
