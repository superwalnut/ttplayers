using Microsoft.Extensions.Logging;
using System.Diagnostics;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;
using TtPlayers.Importer.Extensions;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralMatchTransformer
    {
        Task TransformMatches();
    }

    public class RatingCentralMatchTransformer : IRatingCentralMatchTransformer
    {
        private readonly ILogger<RatingCentralMatchTransformer> _logger;
        private readonly IDocumentRepository<TtEventMatches> _eventMatchesRepository;
        private readonly IDocumentRepository<Match> _matchRepository;
        private readonly IDocumentRepository<TtEvent> _eventRepository;
        private readonly IDocumentRepository<Player> _playerRepository;
        public RatingCentralMatchTransformer(IDocumentRepository<TtEventMatches> eventMatchesRepository,
            IDocumentRepository<Match> matchRepository,
            IDocumentRepository<TtEvent> eventRepository,
            IDocumentRepository<Player> playerRepository,
            ILogger<RatingCentralMatchTransformer> logger)
        {
            _eventMatchesRepository= eventMatchesRepository;
            _matchRepository = matchRepository;
            _eventRepository= eventRepository;
            _playerRepository= playerRepository;
            _logger= logger;
        }

        public async Task TransformMatches()
        {
            var eventMatches = await _eventMatchesRepository.FilterByAsync(x => true);//x.RequireTransform);
            var events = await _eventRepository.FilterByAsync(x => true);
            var players = await _playerRepository.FilterByAsync(x => true);

            _logger.LogInformation($"===== Transforming {eventMatches.Count} events with match details =====");

            var sw = new Stopwatch();
            sw.Start();

            int numThreads = 10; // Number of threads for parallel importing
            List<Task> importTasks = new List<Task>();
            for (int i = 0; i < numThreads; i++)
            {
                importTasks.Add(TransformEventMatches(eventMatches.ToList(), i, numThreads, events, players));
            }
            await Task.WhenAll(importTasks);
            sw.Stop();
        }


        private async Task TransformEventMatches(List<TtEventMatches> eventMatches, int startIndex, int step, List<TtEvent> events, List<Player> players)
        {
            for (int i = startIndex; i < eventMatches.Count; i += step)
            {
                var evt = events.FirstOrDefault(e => e.Id == eventMatches[i].Id);
                var matches = await TransformSingleEventMatches(evt, eventMatches[i], players, false);
                await UpsertMatches(evt, matches, eventMatches[i]);
            }
        }

        private async Task UpsertMatches(TtEvent evt, List<Match> matches, TtEventMatches eventMatch)
        {
            _logger.LogInformation($"Upserting event:{evt.Name} - {matches.Count} matches");
            var result = await _matchRepository.UpsertManyAsync(matches);

            // set transformed to false
            _logger.LogInformation($"Set RequireTransform flag to false for event-matches");
            eventMatch.RequireTransform = false;
            await _eventMatchesRepository.UpsertAsync(eventMatch, x => x.Id == evt.Id);

            _logger.LogInformation($"Upserted {evt.Name}:{evt.Id} matches");
        }

        private async Task<List<Match>> TransformSingleEventMatches(TtEvent evt, TtEventMatches eventMatch, List<Player> players, bool forceAll = false)
        {
            _logger.LogInformation($"Process {evt.Name}:{evt.Id} with {eventMatch.Matches.Count} matches...");

            if (!forceAll)
            {
                var importedMatches = await _matchRepository.FilterByAsync(x => x.EventId == evt.Id);
                if (importedMatches.Count == eventMatch.Matches.Count)
                {
                    //same matches found for the same event, no need to import
                    return new List<Match>();
                }
            }

            var groups = eventMatch.Matches.GroupBy(x => new { WinnerId = x.WinnerID, LoserId = x.LoserID }, y => y);

            var matches = new List<Match>();
            foreach (var group in groups)
            {
                for (int i = 0; i < group.Count(); i++)
                {
                    var item = group.ToList()[i];
                    var (winnerSetWins, winnerSetScores, loserSetWins, loserSetScores) = item.Score.GetSetWinsAndScores();
                    matches.Add(new Match
                    {
                        Id = $"{eventMatch.Id}-{group.Key.WinnerId}-{group.Key.LoserId}-{i}",
                        EventId = eventMatch.Id,
                        EventName = evt.Name,
                        MatchDate = evt.Date,
                        Score = item.Score,
                        WinnerId = item.WinnerID,
                        WinnerName = players.FirstOrDefault(x => x.Id == item.WinnerID)?.FullName ?? "",
                        WinnerDelta = int.Parse(item.WinnerDelta),
                        WinnerOpponentMean = int.Parse(item.WinnerOpponentMean),
                        WinnerOpponentStDev = int.Parse(item.WinnerOpponentStDev),
                        LoserId = item.LoserID,
                        LoserName = players.FirstOrDefault(x => x.Id == item.LoserID)?.FullName ?? "",
                        LoserDelta = int.Parse(item.LoserDelta),
                        LoserOpponentMean = int.Parse(item.LoserOpponentMean),
                        LoserOpponentStDev = int.Parse(item.LoserOpponentStDev),
                        MatchesPairPlayed = int.Parse(item.MatchesPairPlayed),
                        LastUpdated = DateTime.Now,
                        PlayerIds = new List<string> { item.WinnerID, item.LoserID },
                        WinnerSetWins = winnerSetWins,
                        LoserSetWins = loserSetWins,
                        WinnerSetScores = winnerSetScores,
                        LoserSetScores = loserSetScores,
                        RequireDeltaPush = true
                    });
                }
            }

            return matches;
        }

        private async Task ImportTransformedMatches()
        {

        }

        
    }
}
