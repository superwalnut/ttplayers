using Microsoft.Extensions.Logging;
using System;
using System.Diagnostics;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralOpponentImporter
    {
        Task ImportOpponents();
    }

    public class RatingCentralOpponentImporter : IRatingCentralOpponentImporter
    {
        private readonly ILogger<RatingCentralMatchTransformer> _logger;
        private readonly IDocumentRepository<Match> _matchRepository;
        private readonly IDocumentRepository<Player> _playerRepository;
        private readonly IDocumentRepository<PlayerOpponentList> _opponentListRepository;

        public RatingCentralOpponentImporter(IDocumentRepository<Match> matchRepository,
            IDocumentRepository<Player> playerRepository,
            IDocumentRepository<PlayerOpponentList> opponentListRepository,
            ILogger<RatingCentralMatchTransformer> logger)
        {
            _logger = logger;
            _matchRepository = matchRepository;
            _playerRepository = playerRepository;
            _opponentListRepository = opponentListRepository;
        }

        public async Task ImportOpponents()
        {
            var sw = new Stopwatch();
            sw.Start();

            var players = await _playerRepository.FilterByAsync(x => true);
            var matches = await _matchRepository.FilterByAsync(x => true);

            int numThreads = 10; // Number of threads for parallel importing
            List<Task> importTasks = new List<Task>();
            for (int i = 0; i < numThreads; i++)
            {
                importTasks.Add(ImportPlayerOpponents(players.ToList(), matches.ToList(), i, numThreads));
            }
            await Task.WhenAll(importTasks);

            _logger.LogInformation($"Finish importing opponents for - {sw.Elapsed}.");
            sw.Stop();

        }

        private async Task ImportPlayerOpponents(List<Player> players, List<Match> matches, int startIndex, int step)
        {
            var total = players.Count;
            var opponentLists = new List<PlayerOpponentList>();

            for (int i = startIndex; i < players.Count; i += step)
            {
                var player = players[i];

                var selectedMatches = matches.Where(x => x.WinnerId == player.Id || x.LoserId == player.Id);
                var groups = from p in selectedMatches
                             group p by new { FirstPlayerId = p.PlayerIds.OrderBy(x => x).First(), SecondPlayerId = p.PlayerIds.OrderBy(x => x).Last() } into g
                             select g;

                var opponentList = new PlayerOpponentList
                {
                    Id = player.Id,
                    FullName = player.FullName,
                    LastUpdated = DateTime.Now,
                    RequireDeltaPush = true
                };

                foreach (var group in groups)
                {
                    var opponentId = player.Id == group.Key.FirstPlayerId ? group.Key.SecondPlayerId : group.Key.FirstPlayerId;
                    var opponentName = group.First().WinnerId == opponentId ? group.First().WinnerName : group.First().LoserName;

                    opponentList.Opponents.Add(new PlayerOpponent
                    {
                        Id = opponentId,
                        FullName = opponentName,
                        Matches = group.Select(x => new PlayerOpponentMatch
                        {
                            Id = x.Id,
                            MatchDate = x.MatchDate,
                            WinnerId = x.WinnerId,
                            LoserId = x.LoserId,
                            LoserSetScores = x.LoserSetScores,
                            LoserSetWins = x.LoserSetWins,
                            WinnerSetScores = x.WinnerSetScores,
                            WinnerSetWins = x.WinnerSetWins,
                        }).ToList()
                    });
                }

                opponentLists.Add(opponentList);

                _logger.LogInformation($"{i}/{total} - Added {opponentList.Opponents.Count} opponents for player {player.FullName}:{player.Id}.");
            }

            _logger.LogInformation($"Upserting opponents - {opponentLists.Count}");
            var result = await _opponentListRepository.UpsertManyAsync(opponentLists);
        }
    }
}
