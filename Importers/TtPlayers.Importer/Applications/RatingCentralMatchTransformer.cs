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
        public RatingCentralMatchTransformer(IDocumentRepository<TtEventMatches> eventMatchesRepository,
            IDocumentRepository<Match> matchRepository,
            IDocumentRepository<TtEvent> eventRepository,
            ILogger<RatingCentralMatchTransformer> logger)
        {
            _eventMatchesRepository= eventMatchesRepository;
            _matchRepository = matchRepository;
            _eventRepository= eventRepository;
            _logger= logger;
        }

        public async Task TransformMatches()
        {
            var eventMatches = await _eventMatchesRepository.FilterByAsync(x => x.RequireTransform);
            var events = await _eventRepository.FilterByAsync(x => true);

            _logger.LogInformation($"===== Transforming {eventMatches.Count} events with match details =====");
            var evtIndex = eventMatches.Count;

            foreach (var eventMatch in eventMatches)
            {
                var evt = events.FirstOrDefault(e => e.Id == eventMatch.Id);
                _logger.LogInformation($"Process {evt.Name}:{evt.Id} with {eventMatch.Matches.Count} matches...");
                
                var index = eventMatch.Matches.Count;
                var groups = eventMatch.Matches.GroupBy(x => new { WinnerId = x.WinnerID, LoserId = x.LoserID }, y => y);
                foreach (var group in groups)
                {
                    for (int i = 0; i < group.Count(); i++)
                    {
                        var item = group.ToList()[i];
                        var match = new Match
                        {
                            Id = $"{eventMatch.Id}-{group.Key.WinnerId}-{group.Key.LoserId}-{i}",
                            EventId = eventMatch.Id,
                            MatchDate = evt.Date,
                            Score = item.Score,
                            WinnerId = item.WinnerID,
                            WinnerDelta = item.WinnerDelta,
                            WinnerOpponentMean = item.WinnerOpponentMean,
                            WinnerOpponentStDev = item.WinnerOpponentStDev,
                            LoserId = item.LoserID,
                            LoserDelta = item.LoserDelta,
                            LoserOpponentMean = item.LoserOpponentMean,
                            LoserOpponentStDev = item.LoserOpponentStDev,
                            MatchesPairPlayed = item.MatchesPairPlayed,
                            LastUpdated = DateTime.Now,
                            PlayerIds = new List<string> { item.WinnerID, item.LoserID },
                            RequireDeltaPush = true
                        };

                        await _matchRepository.UpsertAsync(match, x=>x.Id == match.Id);
                        _logger.LogInformation($"Event Index {evtIndex} - Match Index {index} - Saved event:{eventMatch.Id} - match {i} between {item.WinnerID}-vs-{item.LoserID}...");
                        index--;
                    }
                }

                _logger.LogInformation($"Index {evtIndex} - Transformed {evt.Name}:{evt.Id} matches");
                evtIndex--;
            }
        }
    }
}
