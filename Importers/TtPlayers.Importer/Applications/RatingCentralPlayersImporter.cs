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
using TtPlayers.Importer.Extensions;
using TtPlayers.Importer.Infrastructure;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralPlayersImporter
    {
        Task Import();
    }

    public class RatingCentralPlayersImporter : RatingCentralImporterBase, IRatingCentralPlayersImporter
    {
        private readonly SndttaSettings _settings;
        private readonly ILogger<RatingCentralPlayersImporter> _logger;
        private readonly IDocumentRepository<Player> _playerRepository;
        public RatingCentralPlayersImporter(IOptions<SndttaSettings> settings, IHttpDownloader downloader, IDocumentRepository<Player> playerRepository, ILogger<RatingCentralPlayersImporter> logger)
            :base(logger,downloader)
        {
            _settings = settings.Value;
            _playerRepository = playerRepository;
            _logger = logger;
        }

        public async Task Import()
        {
            var trNodes = GetTrNodes(_settings.RcAusPlayerListUrl);
            if (trNodes == null)
                return;

            var players = new List<Player>();
            foreach (var trNode in trNodes)
            {
                if(trNode.ChildNodes.Count == 4)
                {
                    var ratingNode = trNode.ChildNodes[0];
                    var nameNode = trNode.ChildNodes[1];
                    var idNode = trNode.ChildNodes[2];
                    var dateNode = trNode.ChildNodes[3];

                    var firstName = nameNode.InnerText.Trim().ToFirstName();
                    var lastName = nameNode.InnerText.Trim().ToLastName();
                    var fullName = nameNode.InnerText.Trim().ToFirstLastName();
                    var id = nameNode.FirstChild.Attributes["href"].Value.ToPlayerId();
                    DateTime.TryParse(dateNode.InnerText.Trim(), out var lastPlayedDate);

                    players.Add(new Player
                    {
                        Id = id,
                        FirstName = firstName,
                        LastName = lastName,
                        FullName = fullName,
                        Rating = ratingNode.InnerText.Trim(),
                        LastPlayed = lastPlayedDate
                    });
                    _logger.LogInformation($"Player {fullName} added with ID {id}.");
                }
            }

            if (players.Any())
            {
                foreach (var player in players)
                {
                    await _playerRepository.UpsertAsync(player, x => x.Id == player.Id);
                }
                _logger.LogInformation($"Finish upserting {players.Count} players.");
            }

        }
    }
}
