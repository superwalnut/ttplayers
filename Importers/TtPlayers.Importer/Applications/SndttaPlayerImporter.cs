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

namespace TtPlayers.Importer.Applications
{
    public interface ISndttaPlayerImporters
    {
        Task Import();
    }

    [Obsolete]
    public class SndttaPlayerImporter : ISndttaPlayerImporters
    {
        private readonly SndttaSettings _settings;
        private readonly IHttpDownloader _httpDownloader;
        private readonly ILogger<SndttaPlayerImporter> _logger;
        private readonly IDocumentRepository<Player> _playerRepository;
        private readonly IDocumentRepository<SndttaTeam> _teamRepository;

        public SndttaPlayerImporter(IOptions<SndttaSettings> settings, IHttpDownloader downloader, 
            IDocumentRepository<Player> playerRepository,
            IDocumentRepository<SndttaTeam> teamRepository, 
            ILogger<SndttaPlayerImporter> logger)
        {
            _settings = settings.Value;
            _httpDownloader = downloader;
            _playerRepository = playerRepository;
            _teamRepository = teamRepository;
            _logger = logger;
        }

        public async Task Import()
        {
            var teamNameDict = GetTeamNames();

            var playerHtml = await _httpDownloader.DownloadByGet(_settings.PlayerListUrl);
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
            var players = new List<Player>();
            var teams = new List<SndttaTeam>();
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

                    teams.Add(new SndttaTeam { 
                        Id = teamName,
                        ShortName = teamNameDict?.FirstOrDefault(x=>x.Name.Equals(teamName))?.ShortName,
                    });
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
                        var playerName = playerLinkNode.InnerText.Replace("- Utility Player","").Trim();

                        var player = players.FirstOrDefault(x => x.Id == playerId);
                        if (player!= null)
                        {
                            //player already in the list, just add another team name
                            player.Team.Add(teamName);
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

            if(players.Any())
            {
                var foundPlayers = await _playerRepository.FilterByAsync(x => true);
                foreach(var player in players)
                {
                    var found = foundPlayers.FirstOrDefault(x=>x.Id == player.Id);
                    if(found != null)
                    {
                        found.IsSndtta = true;
                        found.Division= player.Division;
                        found.Team= player.Team;

                        found.LastUpdated = DateTime.Now;
                        found.RequireDeltaPush = true;

                        await _playerRepository.UpsertAsync(player, x => x.Id == player.Id);
                        _logger.LogInformation($"Updating sndtta player {player.FullName}:{player.Id}");
                    }
                }
            }

            if (teams.Any())
            {
                foreach (var team in teams)
                {
                    var teamPlayers = players.Where(x => x.Team.Contains(team.Id));
                    team.Players.AddRange(teamPlayers);
                    team.LastUpdated = DateTime.Now;

                    await _teamRepository.UpsertAsync(team, x => x.Id == team.Id);
                }
            }
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
