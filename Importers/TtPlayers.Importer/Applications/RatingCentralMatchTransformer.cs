using Microsoft.Extensions.Logging;
using System.Diagnostics;
using TtPlayers.Importer.Applications.Scraper;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;
using TtPlayers.Importer.Extensions;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralMatchTransformer
    {
        Task TransformMatches(bool forceAll = false);
    }

    public class RatingCentralMatchTransformer : IRatingCentralMatchTransformer
    {
        private readonly ILogger<RatingCentralMatchTransformer> _logger;
        private readonly IDocumentRepository<TtEventMatches> _eventMatchesRepository;
        private readonly IDocumentRepository<Match> _matchRepository;
        private readonly IDocumentRepository<TtEvent> _eventRepository;
        private readonly IRatingCentralScraper _rcScraper;

        public RatingCentralMatchTransformer(IDocumentRepository<TtEventMatches> eventMatchesRepository,
            IDocumentRepository<Match> matchRepository,
            IDocumentRepository<TtEvent> eventRepository,
            ILogger<RatingCentralMatchTransformer> logger,
            IRatingCentralScraper rcScraper)
        {
            _eventMatchesRepository= eventMatchesRepository;
            _matchRepository = matchRepository;
            _eventRepository= eventRepository;
            _rcScraper = rcScraper;
            _logger= logger;
        }

        public async Task TransformMatches(bool forceAll = false)
        {
            var eventMatches = await _eventMatchesRepository.FilterByAsync(x => true);//x.RequireTransform);
            var events = await _eventRepository.FilterByAsync(x => true);
            var players = await _rcScraper.DownloadPlayersAsync();

            _logger.LogInformation($"===== Transforming {eventMatches.Count} events with match details =====");

            var sw = new Stopwatch();
            sw.Start();

            int numThreads = 10; // Number of threads for parallel importing
            List<Task> importTasks = new List<Task>();
            for (int i = 0; i < numThreads; i++)
            {
                importTasks.Add(TransformEventMatches(eventMatches.ToList(), i, numThreads, events, players, forceAll));
            }
            await Task.WhenAll(importTasks);
            sw.Stop();
        }

        private async Task TransformEventMatches(List<TtEventMatches> eventMatches, int startIndex, int step, List<TtEvent> events, IList<Player> players, bool forceAll = false)
        {
            for (int i = startIndex; i < eventMatches.Count; i += step)
            {
                var evt = events.FirstOrDefault(e => e.Id == eventMatches[i].Id);

                if (!forceAll)
                {
                    var importedMatches = await _matchRepository.FilterByAsync(x => x.EventId == evt.Id);
                    if (importedMatches.Count == eventMatches[i].Matches.Count)
                    {
                        continue;
                    }
                }

                var matches = await TransformSingleEventMatches(evt, eventMatches[i], players);
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

        private async Task<List<Match>> TransformSingleEventMatches(TtEvent evt, TtEventMatches eventMatch, IList<Player> players)
        {
            _logger.LogInformation($"Process {evt.Name}:{evt.Id} with {eventMatch.Matches.Count} matches...");

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
    }
}
