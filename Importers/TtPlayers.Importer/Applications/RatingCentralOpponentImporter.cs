using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralOpponentImporter
    {

    }

    public class RatingCentralOpponentImporter : IRatingCentralOpponentImporter
    {
        private readonly ILogger<RatingCentralMatchTransformer> _logger;
        private readonly IDocumentRepository<Match> _matchRepository;
        private readonly IDocumentRepository<Player> _playerRepository;

        public RatingCentralOpponentImporter(IDocumentRepository<Match> matchRepository,
            IDocumentRepository<Player> playerRepository,
            ILogger<RatingCentralMatchTransformer> logger)
        {
            _logger= logger;
            _matchRepository= matchRepository;
            _playerRepository= playerRepository;
        }

        public async Task ImportOpponents()
        {
            var players = await _playerRepository.FilterByAsync(x => true);

        }
    }
}
