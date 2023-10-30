using Amazon.Runtime.Internal.Endpoints.StandardLibrary;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Diagnostics;
using TtPlayers.Importer.Applications.Base;
using TtPlayers.Importer.Applications.Scraper;
using TtPlayers.Importer.Configurations;
using TtPlayers.Importer.Domain.CsvMapping;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;
using TtPlayers.Importer.Extensions;
using TtPlayers.Importer.Infrastructure;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralPlayersImporter
    {
        Task Import(bool forceAll = false);
    }

    public class RatingCentralPlayersImporter : RatingCentralImporterBase, IRatingCentralPlayersImporter
    {
        private readonly SndttaSettings _settings;
        private readonly ILogger<RatingCentralPlayersImporter> _logger;
        private readonly IDocumentRepository<Player> _playerRepository;
        private readonly IDocumentRepository<PlayerHistory> _playerHistoryRepository;
        private readonly IDocumentRepository<PlayerUpdate> _playerUpdateRepository;
        private readonly IDocumentRepository<Match> _matchRepository;
        private readonly ISndttaPlayerScraper _sndttaScraper;
        private readonly IRatingCentralScraper _rcScraper;

        public RatingCentralPlayersImporter(IOptions<SndttaSettings> settings, 
            IDocumentRepository<Player> playerRepository,
            IDocumentRepository<PlayerHistory> playerHistoryRepository,
            IDocumentRepository<Match> matchRepository,
            ISndttaPlayerScraper sndttaScraper,
            ILogger<RatingCentralPlayersImporter> logger,
            IDocumentRepository<PlayerUpdate> playerUpdateRepository,
            IRatingCentralScraper rcScraper)
            : base(logger)
        {
            _settings = settings.Value;
            _playerRepository = playerRepository;
            _playerHistoryRepository = playerHistoryRepository;
            _matchRepository = matchRepository;
            _sndttaScraper = sndttaScraper;
            _rcScraper = rcScraper;
            _logger = logger;
            _playerUpdateRepository = playerUpdateRepository;
        }

        public async Task Import(bool forceAll = false)
        {
            var players = await _rcScraper.DownloadPlayersAsync();

            if (players.Any())
            {
                // filter players
                var pendingPlayers = new List<Player>();
                if (!forceAll)
                {
                    var requiredPlayers = await _playerUpdateRepository.FilterByAsync(x => true);
                    var requiredPlayerIds = requiredPlayers.Select(x => x.Id).Distinct().ToList();
                    pendingPlayers = players.Where(x => requiredPlayerIds.Contains(x.Id)).ToList();
                }

                // update sndtta player division & teams
                _logger.LogInformation($"Updating Divisions & Teams & Rankings.");

                var sndttaData = await _sndttaScraper.GetPlayersAsync();
               
                var sw = new Stopwatch();
                sw.Start();

                int numThreads = 10; // Number of threads for parallel importing

                List<Task> importTasks = new List<Task>();

                for (int i = 0; i < numThreads; i++)
                {
                    importTasks.Add(ImportPlayersAsync(pendingPlayers.ToList(), i, numThreads, sndttaData));
                }

                await Task.WhenAll(importTasks);
                sw.Stop();
                //load player-update action table
                _logger.LogInformation($"Finish upserting {players.Count()} players in {sw.Elapsed.TotalMinutes} mins.");
            }
        }

        private async Task ImportPlayersAsync(List<Player> players, int startIndex, int step, List<Player> sndttaData)
        {
            for (int i = startIndex; i < players.Count; i += step)
            {
                Player player = players[i];
                UpdateTeamAndDivision(player, sndttaData);
                UpdatePlayerRanking(player, players);
                await ImportSinglePlayerHistory(player.Id);
                await UpdatePlayerSummary(player);
                await UpdatePlayer(player);
                _logger.LogInformation($"Index:{i} Imported player: {player.FullName}:{player.Id}");
            }
        }

        private void UpdateTeamAndDivision(Player player, List<Player> sndttaData)
        {
            //if it is sndtta player, update team & division
            var sndtta = sndttaData.FirstOrDefault(x => x.Id == player.Id);
            if (sndtta != null)
            {
                player.IsSndtta = true;
                player.Division = sndtta.Division;
                player.Team = sndtta.Team;
            }
        }

        private async Task ImportSinglePlayerHistory(string playerId)
        {
            // download player history json
            var history = await _rcScraper.DownloadPlayerHistoriesAsync(playerId);

            var importedPlayerHistory = await _playerHistoryRepository.FindOneAsync(x => x.Id == playerId);

            if (importedPlayerHistory == null || importedPlayerHistory.History.Count != history.History.Count)
            {
                // if never imported before OR imported history != current history, do an update
                history.RequireDeltaPush = true;
                await _playerHistoryRepository.UpsertAsync(history, x => x.Id == playerId);
                _logger.LogInformation($"Imported {history.History.Count} match records for player:{playerId}.");
            }
            else
            {
                _logger.LogInformation($"Player:{playerId} history remain unchanged.");
            }
        }

        private void UpdatePlayerRanking(Player player, IEnumerable<Player> players)
        {
            _logger.LogInformation($"Update {player.LastName}:{player.Id} Ranking.");

            var count = players.Where(x=>x.Rating > player.Rating).Count();
            var genderCount = players.Where(x => x.Gender == player.Gender && x.Rating > player.Rating).Count();
            
            //national ranking
            player.NationalRanking = count+1;
            player.NationalGenderRanking = genderCount+1;

            //state ranking
            var stateCount = players.Where(x => x.Rating > player.Rating && x.State == player.State).Count();
            var stateGenderCount = players.Where(x => x.Rating > player.Rating && x.Gender == player.Gender && x.State == player.State).Count();

            player.StateRanking = stateCount + 1;
            player.StateGenderRanking = stateGenderCount + 1;
        }

        private async Task UpdatePlayer(Player player)
        {

            player.RequireDeltaPush = true;
            await _playerRepository.UpsertAsync(player, x => x.Id == player.Id);
            _logger.LogInformation($"Player {player.FullName}:{player.Id} updated.");
        }

        private async Task UpdatePlayerSummary(Player player)
        {
            var playerHistory = await _playerHistoryRepository.FindOneAsync(x => x.Id == player.Id);
            if(playerHistory != null && playerHistory.History.Any())
            {
                var histories = playerHistory.History.OrderByDescending(x => x.EventDate);

                //highest rating
                var highestRatingHistory = histories.OrderByDescending(x => x.FinalMean).FirstOrDefault();
                player.HighestRating = highestRatingHistory.FinalMean;
                player.HighestRatingStDev = highestRatingHistory.FinalStDev;

                // recent histories 6 months
                var recentHistories = histories.Where(x => x.EventDate >= DateTime.Now.AddMonths(-6)).OrderByDescending(x => x.EventDate);
                if(recentHistories.Any())
                {
                    player.PlayedEventsLast6Mth = recentHistories.Count();
                    player.RatingChangesLast6Mth = recentHistories.First().FinalMean - recentHistories.Last().InitialMean;
                }
                
                player.LastPlayedEvent = histories.FirstOrDefault()?.EventName;
                player.LastPlayedEventRatingChange = histories.FirstOrDefault()?.PointChange;

                // total events
                player.TotalPlayedEvents = histories.Count();

                // history first date
                var firstHistory = histories.LastOrDefault();
                if(firstHistory != null)
                {
                    player.StartPlayingDate = firstHistory.EventDate;
                }

                // is junior
                var hasJuniorEvent = histories.Any(x => x.EventName.ToLower().Contains("junior"));
                if (hasJuniorEvent)
                {
                    player.IsJunior = true;
                }
            }

            var matches = await _matchRepository.FilterByAsync(x => x.PlayerIds.Contains(player.Id));
            if(matches.Any())
            {
                var matchPlayed = matches.Where(x => x.MatchDate >= DateTime.Now.AddMonths(-6));
                player.PlayedMatchesLast6Mth = matchPlayed.Count();
                player.MatchWinsLast6Mth = matchPlayed.Count(x=>x.WinnerId == player.Id);

                var wins = matches.Count(x => x.WinnerId == player.Id);
                var loses = matches.Count(x => x.LoserId == player.Id);

                player.TotalWins = wins;
                player.TotalLoses = loses;
                player.TotalPlayedMatches= matches.Count();


                //year to date
                var yearToDateMatches = matches.Where(x => x.MatchDate >= new DateTime(DateTime.Now.Year, 1, 1));
                player.YearToDateWins = yearToDateMatches.Count(x=>x.WinnerId == player.Id);
                player.YearToDateLoses = yearToDateMatches.Count(x => x.LoserId == player.Id);

                // first - fifth games
                var firstGameWins = matches.Select(x => WinGame(0, player.Id, x));
                player.WinRateFirstGame = TryDivide(firstGameWins.Count(x => x == true), firstGameWins.Count(x => x.HasValue));
                
                var secondGameWins = matches.Select(y => WinGame(1, player.Id, y));
                player.WinRateSecondGame = TryDivide(secondGameWins.Count(y => y == true), secondGameWins.Count(x => x.HasValue));

                var thirdGameWins = matches.Select(x => WinGame(2, player.Id, x));
                player.WinRateThirdGame = TryDivide(thirdGameWins.Count(x => x == true) , thirdGameWins.Count(x => x.HasValue));

                var fourthGameWins = matches.Select(x => WinGame(3, player.Id, x));
                player.WinRateFourthGame = TryDivide(fourthGameWins.Count(z => z == true) , fourthGameWins.Count(x => x.HasValue));

                var fifthGameWins = matches.Select(x => WinGame(4, player.Id, x));
                player.WinRateFifthGame = TryDivide(fifthGameWins.Count(x => x == true) , fifthGameWins.Count(x => x.HasValue));

                // beat higher player ratings, I am the winner, LoserOpponentMean => is my rating, WinnerOpponentMean => is my opponent rating
                player.TotalBeatHigherRatingPlayers = matches.Count(x => x.WinnerId == player.Id && x.LoserOpponentMean < x.WinnerOpponentMean);

                // lose lower player ratings, I am the loser, WinnerOpponentMean => is my rating, LoserOpponentMean => is my opponent rating
                player.TotalLostLowerRatingPlayers = matches.Count(x => x.LoserId == player.Id && x.WinnerOpponentMean > x.LoserOpponentMean);

                // all opponents
                var opponentIds = new List<string>();
                var loserOpponents = matches.Where(x => x.WinnerId == player.Id).Select(x => x.LoserId);
                var winnerOpponents = matches.Where(x => x.LoserId == player.Id).Select(x => x.WinnerId);
                opponentIds = loserOpponents.Union(winnerOpponents).Distinct().ToList();
                player.TotalOpponentCount = opponentIds.Count;

                player.TotalBeatPlayersCount = loserOpponents.Distinct().Count();

                var winsWithoutLosingSet = matches.Count(x => x.WinnerId == player.Id && WinAllSets(x.Score));
                player.TotalWinsWithoutLosingAnySet = winsWithoutLosingSet;
            }

            _logger.LogInformation($"Updated player Summary...");
        }

        private bool WinAllSets(string score)
        {
            var (setWins,_, setLoses, _) =  score.GetSetWinsAndScores();

            return setLoses == 0;
        }

        private double TryDivide(int first, int second)
        {
            if(second== 0) return 0;

            return first * 1.0d / second;
        }

        // game index must be 0-4 for a best of 5 game match
        private bool? WinGame(int gameIndex, string playerId, Match match)
        {
            if (string.IsNullOrEmpty(match.Score))
                return null;

            if(playerId == match.WinnerId)
            {
                //if the player is the winner, negative means lost a game
                var games = match.Score.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
                if (gameIndex >= games.Length)
                    return null;

                if(int.TryParse(games[gameIndex], out var game) && game>0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else if(playerId == match.LoserId)
            {
                //if the player is the loser, negative means win a game
                var games = match.Score.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
                if(gameIndex >= games.Length)
                    return null;

                if (int.TryParse(games[gameIndex], out var game) && game < 0)
                {
                    return true;
                }
                else { return false; }
            }

            return null;
        }
    }
}
