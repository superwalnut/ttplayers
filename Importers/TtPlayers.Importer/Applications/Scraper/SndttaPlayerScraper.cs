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
using TtPlayers.Importer.data;
using TtPlayers.Importer.Domain.CsvMapping;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;
using TtPlayers.Importer.Infrastructure;

namespace TtPlayers.Importer.Applications.Scraper
{
    public interface ISndttaPlayerScraper
    {
        Task<List<Player>> GetPlayersAsync();
        List<TeamNameCsvModel> GetTeamNames();
    }

    public class SndttaPlayerScraper : ISndttaPlayerScraper
    {
        private readonly SndttaSettings _settings;
        private readonly IHttpDownloader _httpDownloader;
        private readonly ILogger<SndttaPlayerScraper> _logger;

        public SndttaPlayerScraper(IOptions<SndttaSettings> settings, IHttpDownloader downloader,
            ILogger<SndttaPlayerScraper> logger)
        {
            _settings = settings.Value;
            _httpDownloader = downloader;
            _logger = logger;

        }

        public async Task<List<Player>> GetPlayersAsync()
        {
            var teamNameDict = GetTeamNames();

            var playerHtml = await _httpDownloader.DownloadByGet(_settings.PlayerListUrl);
            HtmlAgilityPack.HtmlDocument htmlDoc = new HtmlAgilityPack.HtmlDocument();
            htmlDoc.LoadHtml(playerHtml);

            if (htmlDoc.DocumentNode == null)
            {
                _logger.LogError("Player list url html document is empty.");
                return null;
            }

            var trNodes = htmlDoc.DocumentNode.SelectNodes("//table//tr");

            if (!trNodes.Any())
            {
                _logger.LogError("Player list url html document is empty.");
                return null;
            }

            var division = Divisions.None;
            var teamName = "";
            var players = new List<Player>();
            var teams = new List<SndttaTeam>();
            foreach (var trNode in trNodes)
            {
                if (trNode.Attributes["bgcolor"] != null && trNode.Attributes["bgcolor"].Value == "#D3D3D3")
                {
                    // division row
                    var val = trNode.InnerText.Replace(" ", "").Trim();
                    Enum.TryParse(val, out division);
                    continue;
                }

                if (trNode.Attributes["bgcolor"] != null && trNode.Attributes["bgcolor"].Value == "#F0F0F0")
                {
                    // team name row
                    teamName = trNode.InnerText.Trim();

                    teams.Add(new SndttaTeam
                    {
                        Id = teamName,
                        ShortName = teamNameDict?.FirstOrDefault(x => x.Name.Equals(teamName))?.ShortName,
                    });
                    continue;
                }

                if (trNode.ChildNodes.Count() == 3)
                {
                    // player row
                    var playerLinkNode = trNode.SelectSingleNode(".//a");
                    if (playerLinkNode != null && playerLinkNode.Attributes["href"] != null && playerLinkNode.Attributes["href"].Value.Contains("ratingscentral.com"))
                    {
                        var playerLink = playerLinkNode.Attributes["href"].Value;
                        var playerId = playerLink.Replace(_settings.RcPlayerUrl, "");
                        var playerName = playerLinkNode.InnerText.Replace("- Utility Player", "").Trim();

                        var player = players.FirstOrDefault(x => x.Id == playerId);
                        if (player != null)
                        {
                            //player already in the list, just add another team name
                            player.Team.Add(teamName);
                            player.Division = GetLowerDivision((int)division, player);
                        }
                        else
                        {
                            players.Add(new Player
                            {
                                Id = playerId,
                                FullName = playerName,
                                Team = new List<string> { teamName },
                                Division = (int)division
                            });
                        }
                    }
                }
            }

            return players;
        }

        public List<TeamNameCsvModel> GetTeamNames()
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

        private int GetLowerDivision(int div, Player player)
        {
            var stack = new Stack<int>();
            stack.Push(99);
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);
            stack.Push(4);
            stack.Push(5);

            while (stack.Peek() > 0)
            {
                var val = stack.Pop();
                if (val == div || val == player.Division)
                {
                    return val;
                }
            }

            return 0;
        }
    }
}
