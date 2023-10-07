using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Configurations;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;
using TtPlayers.Importer.Infrastructure;

namespace TtPlayers.Importer.Applications
{
    public interface ISndttaPlayerImporters
    {
        Task Import();
    }

    public class SndttaPlayerImporter : ISndttaPlayerImporters
    {
        private readonly SndttaSettings _settings;
        private readonly IHttpDownloader _httpDownloader;
        private readonly ILogger<SndttaPlayerImporter> _logger;
        private readonly IDocumentRepository<Player> _playerRepository;

        public SndttaPlayerImporter(IOptions<SndttaSettings> settings, IHttpDownloader downloader, IDocumentRepository<Player> playerRepository, ILogger<SndttaPlayerImporter> logger)
        {
            _settings = settings.Value;
            _httpDownloader = downloader;
            _playerRepository = playerRepository;
            _logger = logger;
        }

        public async Task Import()
        {
            var playerHtml = _httpDownloader.DownloadByGet(_settings.PlayerListUrl);
            HtmlAgilityPack.HtmlDocument htmlDoc = new HtmlAgilityPack.HtmlDocument();
            htmlDoc.LoadHtml(playerHtml);

            if (htmlDoc.DocumentNode == null)
            {
                _logger.LogError("Player list url html document is empty.");
                return;
            }

            var trNodes = htmlDoc.DocumentNode.SelectNodes("//table//tr");

            if (!trNodes.Any())
            {
                _logger.LogError("Player list url html document is empty.");
                return;
            }

            var division = Divisions.None;
            var teamName = "";
            foreach ( var trNode in trNodes)
            {
                if (trNode.Attributes["bgcolor"]!=null && trNode.Attributes["bgcolor"].Value == "#D3D3D3")
                {
                    // division row
                    var val = trNode.InnerText.Replace(" ","").Trim();
                    Enum.TryParse<Divisions>(val, out division);
                    continue;
                }

                if (trNode.Attributes["bgcolor"]!=null && trNode.Attributes["bgcolor"].Value == "#F0F0F0")
                {
                    // team name row
                    teamName = trNode.InnerText.Trim();
                    continue;
                }

                if(trNode.ChildNodes.Count() == 3)
                {
                    // player row
                    var playerLinkNode = trNode.SelectSingleNode(".//a");
                    if (playerLinkNode != null && playerLinkNode.Attributes["href"]!=null && playerLinkNode.Attributes["href"].Value.Contains("ratingscentral.com"))
                    {
                        var playerLink = playerLinkNode.Attributes["href"].Value;
                        var playerId = playerLink.Replace(_settings.RcPlayerUrl, "");
                        var playerName = playerLinkNode.InnerText.Trim();

                        // import a player
                        try
                        {
                            await _playerRepository.InsertOneAsync(new Player
                            {
                                PlayerId = playerId,
                                Name = playerName,
                                Team = teamName,
                                Division = (int)division
                            });
                        }
                        catch(Exception ex)
                        {
                            _logger.LogError(ex,"Failed to import Player.");
                        }

                    }
                }
            }
        }
    }
}
