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

            // men & women players
            var totalMenPlayerCount = await _playerRepository.CountAsync(x=>x.Gender == "M");
            var stateMenPlayerCounts = new Dictionary<string, int>();
            foreach (var state in _states)
            {
                var stateCount = await _playerRepository.CountAsync(x => x.State == state && x.Gender == "M");
                stateMenPlayerCounts.Add(state, (int)stateCount);
            }

            var totalWomenPlayerCount = await _playerRepository.CountAsync(x => x.Gender == "F");
            var stateWomenPlayerCounts = new Dictionary<string, int>();
            foreach (var state in _states)
            {
                var stateCount = await _playerRepository.CountAsync(x => x.State == state && x.Gender == "F");
                stateWomenPlayerCounts.Add(state, (int)stateCount);
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

            // average winning rate

            var allPlayers = await _playerRepository.FilterByAsync(x => true);
            var selectedPlayers = allPlayers.Where(x => x.TotalPlayedMatches > 0).ToList();
            var averageRate = selectedPlayers.Sum(x => x.TotalWins * 1.0d / x.TotalPlayedMatches) / selectedPlayers.Count;
            var stateAverageRates = new Dictionary<string, double>();
            foreach (var state in _states)
            {
                var statePlayers = allPlayers.Where(x=>x.State == state && x.TotalPlayedMatches > 0).ToList();
                var stateAverageRate = statePlayers.Sum(x => x.TotalWins * 1.0d / x.TotalPlayedMatches) / statePlayers.Count;
                stateAverageRates.Add(state, stateAverageRate);
            }

            _logger.LogInformation($"count average win rate {averageRate}");

            // count matches played by percentages



            var statistics = new Statistics
            {
                Id = DateTime.Now.Date.ToString("yyyy-MM-dd"),
                CreatedDate = DateTime.Now,
                TotalPlayerCount = (int)totalPlayerCount,
                TotalMenPlayerCount = (int)totalMenPlayerCount,
                TotalWomenPlayerCount = (int)totalWomenPlayerCount,
                TotalClubCount = (int)totalClubCount,
                TotalEventCount= (int)totalEventCount,
                TotalMatchCount= (int)totalMatchCount,
                ActivePlayerCount = (int)activePlayerCount,

                AverageWinRate = averageRate,

                StatePlayerCounts = statePlayerCounts,
                StateMenPlayerCounts = stateMenPlayerCounts,
                StateWomenPlayerCounts = stateWomenPlayerCounts,
                StateActivePlayerCounts = activeStateCounts,
                StateClubCounts = stateClubCounts,
                StateEventCounts= stateEventCounts,
                StateMatchCounts = stateMatchCounts,

                StateAverageRates = stateAverageRates,
            };

            await _statisticRepository.UpsertAsync(statistics, x => x.Id == statistics.Id);
        }
    }
}
