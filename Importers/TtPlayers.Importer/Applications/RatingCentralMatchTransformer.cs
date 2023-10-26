using Microsoft.Extensions.Logging;
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
            var eventMatches = await _eventMatchesRepository.FilterByAsync(x => x.RequireTransform);
            var events = await _eventRepository.FilterByAsync(x => true);
            var players = await _playerRepository.FilterByAsync(x => true);

            _logger.LogInformation($"===== Transforming {eventMatches.Count} events with match details =====");
            var evtIndex = eventMatches.Count;

            foreach (var eventMatch in eventMatches)
            {
                var evt = events.FirstOrDefault(e => e.Id == eventMatch.Id);
                _logger.LogInformation($"Process {evt.Name}:{evt.Id} with {eventMatch.Matches.Count} matches...");

                var importedMatches = await _matchRepository.FilterByAsync(x => x.EventId == evt.Id);
                if(importedMatches.Count == eventMatch.Matches.Count)
                {
                    //same matches found for the same event, no need to import
                    evtIndex--;
                    continue;
                }

                var index = eventMatch.Matches.Count;
                var groups = eventMatch.Matches.GroupBy(x => new { WinnerId = x.WinnerID, LoserId = x.LoserID }, y => y);
                foreach (var group in groups)
                {
                    for (int i = 0; i < group.Count(); i++)
                    {
                        var item = group.ToList()[i];
                        var (winnerSetWins, winnerSetScores, loserSetWins, loserSetScores) = item.Score.GetSetWinsAndScores();
                        var match = new Match
                        {
                            Id = $"{eventMatch.Id}-{group.Key.WinnerId}-{group.Key.LoserId}-{i}",
                            EventId = eventMatch.Id,
                            EventName = evt.Name,
                            MatchDate = evt.Date,
                            Score = item.Score,
                            WinnerId = item.WinnerID,
                            WinnerName = players.FirstOrDefault(x=>x.Id == item.WinnerID)?.FullName??"",
                            WinnerDelta = int.Parse(item.WinnerDelta),
                            WinnerOpponentMean = int.Parse(item.WinnerOpponentMean),
                            WinnerOpponentStDev = int.Parse(item.WinnerOpponentStDev),
                            LoserId = item.LoserID,
                            LoserName = players.FirstOrDefault(x=>x.Id == item.LoserID)?.FullName??"",
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
                        };

                        await _matchRepository.UpsertAsync(match, x=>x.Id == match.Id);
                        _logger.LogInformation($"Event Index {evtIndex} - Match Index {index} - Saved event:{eventMatch.Id} - match {i} between {item.WinnerID}-vs-{item.LoserID}...");

                        // set transformed to false
                        eventMatch.RequireTransform = false;
                        await _eventMatchesRepository.UpsertAsync(eventMatch, x => x.Id == evt.Id);
                        index--;
                    }
                }

                _logger.LogInformation($"Index {evtIndex} - Transformed {evt.Name}:{evt.Id} matches");
                evtIndex--;
            }
        }

        
    }
}
