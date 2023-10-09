using CsvHelper.Configuration;
using CsvHelper;
using HtmlAgilityPack;
using Microsoft.Extensions.Logging;
using System.Globalization;
using System.Reflection;
using System.Text;
using TtPlayers.Importer.Infrastructure;
using TtPlayers.Importer.Domain.CsvMapping;

namespace TtPlayers.Importer.Applications
{
    public abstract class RatingCentralImporterBase
    {
        private readonly ILogger _logger;
        private readonly IHttpDownloader _httpDownloader;
        public RatingCentralImporterBase(ILogger logger, IHttpDownloader downloader)
        {
            _logger = logger;
            _httpDownloader = downloader;
        }

        public HtmlNodeCollection GetTrNodes(string url)
        {
            _logger.LogInformation($"Loading items from url {url}.");
            var playerHtml = _httpDownloader.DownloadByGet(url);
            HtmlDocument htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(playerHtml);

            if (htmlDoc.DocumentNode == null)
            {
                _logger.LogError("Player list url html document is empty.");
                return null;
            }

            var trNodes = htmlDoc.DocumentNode.SelectNodes("//table/tbody/tr");

            if (!trNodes.Any())
            {
                _logger.LogError("Player list url html document is empty.");
                return null;
            }

            return trNodes;
        }
    }
}
