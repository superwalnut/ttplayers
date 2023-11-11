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
    public interface IStatisticsImporter
    {
        Task ImportStatistics();
    }

    public class StatisticsImporter : IStatisticsImporter
    {
        private readonly IDocumentRepository<Club> _clubRepository;
        private readonly IDocumentRepository<Player> _playerRepository;
        private readonly IDocumentRepository<TtEvent> _eventRepository;
        private readonly IDocumentRepository<Match> _matchRepository;
        private readonly IDocumentRepository<Statistics> _statisticRepository;
        private readonly ILogger<StatisticsImporter> _logger;

        private static List<string> _states = new List<string> { "ACT", "NSW", "VIC", "WA", "QLD", "TAS", "SA", "NT" };

        public StatisticsImporter(
            IDocumentRepository<Club> clubRepository,
            IDocumentRepository<Player> playerRepository,
            IDocumentRepository<TtEvent> eventRepository,
            IDocumentRepository<Match> matchRepository,
            IDocumentRepository<Statistics> statisticRepository,
            ILogger<StatisticsImporter> logger
            ) 
        { 
            _clubRepository= clubRepository;
            _playerRepository= playerRepository;
            _eventRepository= eventRepository;
            _matchRepository= matchRepository;
            _statisticRepository = statisticRepository;
            _logger = logger;
        }

        public async Task ImportStatistics()
        {
            var totalPlayerCount = await _playerRepository.CountAllAsync();

            var statePlayerCounts = new Dictionary<string, int>();
            foreach(var state in _states)
            {
                var stateCount = await _playerRepository.CountAsync(x=>x.State == state);
                statePlayerCounts.Add(state, (int)stateCount);
            }

            _logger.LogInformation($"count total players {totalPlayerCount}");

            var activePlayerCount = await _playerRepository.CountAsync(x => x.LastPlayed > DateTime.Now.AddMonths(-6));
            var activeStateCounts = new Dictionary<string, int>();
            foreach (var state in _states)
            {
                var stateCount = await _playerRepository.CountAsync(x => x.State == state && x.LastPlayed > DateTime.Now.AddMonths(-6));
                activeStateCounts.Add(state, (int)stateCount);
            }

            _logger.LogInformation($"count active players {activePlayerCount}");

            var totalEventCount = await _eventRepository.CountAllAsync();
            var stateEventCounts = new Dictionary<string, int>();
            foreach (var state in _states)
            {
                var stateCount = await _eventRepository.CountAsync(x => x.State == state);
                stateEventCounts.Add(state, (int)stateCount);
            }

            _logger.LogInformation($"count total events {totalEventCount}");

            // match counts
            var totalMatchCount = await _matchRepository.CountAllAsync();
            var stateMatchCounts = new Dictionary<string, int>();
            foreach (var state in _states)
            {
                var events = await _eventRepository.FilterByAsync(x => x.State == state);
                var eventIds = events.Select(x=>x.Id).ToList();
                var stateMatches = await _matchRepository.FilterByAsync(x => eventIds.Contains(x.EventId));
                stateMatchCounts.Add(state, stateMatches.Count());
            }

            _logger.LogInformation($"count total matches {totalEventCount}");

            var totalClubCount = await _clubRepository.CountAllAsync();
            var stateClubCounts = new Dictionary<string, int>();
            foreach (var state in _states)
            {
                var stateCount = await _clubRepository.CountAsync(x => x.State == state);
                stateClubCounts.Add(state, (int)stateCount);
            }

            _logger.LogInformation($"count total clubs {totalEventCount}");

            var statistics = new Statistics
            {
                Id = DateTime.Now.Date.ToString("yyyy-MM-dd"),
                TotalPlayerCount = (int)totalPlayerCount,
                TotalClubCount= (int)totalClubCount,
                TotalEventCount= (int)totalEventCount,
                TotalMatchCount= (int)totalMatchCount,
                ActivePlayerCount = (int)activePlayerCount,

                StateActivePlayerCounts = activeStateCounts,
                StateClubCounts = stateClubCounts,
                StateEventCounts= stateEventCounts,
                StatePlayerCounts = statePlayerCounts,
                StateMatchCounts = stateMatchCounts
            };

            await _statisticRepository.UpsertAsync(statistics, x => x.Id == statistics.Id);
        }
    }
}
