using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using System.Diagnostics;
using TtPlayers.Importer.Applications.Base;
using TtPlayers.Importer.Applications.Scraper;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;
using TtPlayers.Importer.Extensions;

namespace TtPlayers.Importer.Applications
{
    public interface IRatingCentralPlayersImporter
    {
        Task ImportPlayer();
        Task ImportSndttaTeam();
        Task ImportPlayerRanking();
        Task ImportPlayerSummary(string playerId = null);

        Task ImportPlayerTeamClubs();
    }

    public class RatingCentralPlayersImporter : RatingCentralImporterBase, IRatingCentralPlayersImporter
    {
        private readonly ILogger<RatingCentralPlayersImporter> _logger;
        private readonly IDocumentRepository<Player> _playerRepository;
        private readonly IDocumentRepository<Match> _matchRepository;
        private readonly IDocumentRepository<TtEventPlayer> _eventPlayerRepository;
        private readonly ISndttaPlayerScraper _sndttaScraper;
        private readonly IRatingCentralScraper _rcScraper;
        private readonly IDocumentRepository<SndttaTeam> _teamRepository;

        public RatingCentralPlayersImporter(
            IDocumentRepository<Player> playerRepository,
            IDocumentRepository<Match> matchRepository,
            ISndttaPlayerScraper sndttaScraper,
            ILogger<RatingCentralPlayersImporter> logger,
            IDocumentRepository<TtEventPlayer> eventPlayerRepository,
            IDocumentRepository<SndttaTeam> teamRepository,
            IRatingCentralScraper rcScraper)
            : base(logger)
        {
            _playerRepository = playerRepository;
            _matchRepository = matchRepository;
            _sndttaScraper = sndttaScraper;
            _rcScraper = rcScraper;
            _logger = logger;
            _eventPlayerRepository = eventPlayerRepository;
            _teamRepository = teamRepository;
        }

        public async Task ImportPlayer()
        {
            var csvPlayers = await _rcScraper.DownloadPlayersAsync();
            var players = await _playerRepository.FilterByAsync(x => true);

            var pendingPlayers = new List<Player>();
            foreach(var csvPlayer in csvPlayers)
            {
                var player = players.FirstOrDefault(x => x.Id == csvPlayer.Id);
                if (player != null)
                {
                    //already exist, only update the fields related to RC
                    player.FirstName = csvPlayer.FirstName;
                    player.LastName = csvPlayer.LastName;
                    player.FullName = csvPlayer.FullName;
                    player.Rating = csvPlayer.Rating;
                    player.StDev = csvPlayer.StDev;
                    player.PrimaryClubId = csvPlayer.PrimaryClubId;
                    player.State = csvPlayer.State;
                    player.Country = csvPlayer.Country;
                    player.Gender = csvPlayer.Gender;
                    player.TtaId = csvPlayer.TtaId;
                    player.LastPlayed = csvPlayer.LastPlayed;
                    player.LastEventId = csvPlayer.LastEventId;
                    player.LastUpdated = DateTime.Now;
                    player.RequireDeltaPush = true;

                    pendingPlayers.Add(player);
                    _logger.LogInformation($"Update existing player {player.LastName}:{player.Id} info.");
                }
                else
                {
                    //new player
                    pendingPlayers.Add(csvPlayer);
                    _logger.LogInformation($"Insert a new player {csvPlayer.LastName}:{csvPlayer.Id}.");
                }
            }

            await _playerRepository.UpsertManyAsync(pendingPlayers);
            _logger.LogInformation($"Finish importing {pendingPlayers.Count} players.");
        }

        public async Task ImportSndttaTeam()
        {
            var sndttaData = await _sndttaScraper.GetPlayersAsync();
            var players = await _playerRepository.FilterByAsync(x => true);

            var pendingPlayers = new List<Player>();
            foreach (var s in sndttaData)
            {
                //if it is sndtta player, update team & division
                var player = players.FirstOrDefault(x => x.Id == s.Id);
                if (player != null)
                {
                    _logger.LogInformation($"Update Sndtta team - {player.LastName}:{player.Id}.");

                    player.IsSndtta = true;
                    player.Division = s.Division;
                    player.Team = s.Team;

                    if (!s.ClubIds.Contains(player.PrimaryClubId))
                    {
                        s.ClubIds.Add(player.PrimaryClubId);
                    }
                    player.ClubIds = s.ClubIds;
                    
                    player.LastUpdated = DateTime.Now;
                    player.RequireDeltaPush = true;
                    pendingPlayers.Add(player);
                }
            }

            await _playerRepository.UpsertManyAsync(pendingPlayers);
            _logger.LogInformation($"Finish updating sndtta teams for {pendingPlayers.Count} players.");

            // process teams
            var teams = sndttaData.SelectMany(x => x.Team).Distinct().ToList();
            var pendingTeams = new List<SndttaTeam>();

            var teamNameDict = _sndttaScraper.GetTeamNames();
            foreach (var team in teams)
            {
                var playerIds = sndttaData.Where(x=> x.Team.Contains(team)).Select(x=>x.Id).ToList();
                var teamPlayers = players.Where(x => playerIds.Contains(x.Id)).Select(x=>new SndttaTeamPlayer { 
                    Id = x.Id,
                    FirstName = x.FirstName,
                    LastName = x.LastName,
                    FullName = x.FullName,
                    State= x.State,
                    StDev = x.StDev,
                    Division = x.Division,
                    Gender = x.Gender,
                    Rating = x.Rating,
                    PrimaryClubId = x.PrimaryClubId,
                    LastEventId = x.LastEventId,
                    LastPlayed = x.LastPlayed,
                    TtaId = x.TtaId
                });
                pendingTeams.Add(new SndttaTeam
                {
                    Id = team,
                    LastUpdated = DateTime.Now,
                    ShortName = teamNameDict?.FirstOrDefault(x => x.Name.Equals(team))?.ShortName,
                    Players = teamPlayers.ToList(),
                    RequireDeltaPush = true
                });

                _logger.LogInformation($"Update Sndtta team - {team}.");
            }

            await _teamRepository.UpsertManyAsync(pendingTeams);
            _logger.LogInformation($"Finish updating {pendingTeams.Count} sndtta teams.");
        }

        public async Task ImportPlayerRanking()
        {
            var players = await _playerRepository.FilterByAsync(x => true);

            var rankedPlayers = players.Where(x => x.StDev < 100);
            var rankedMenPlayers = rankedPlayers.Where(x => x.Gender == "M");
            var rankedWomenPlayers = rankedPlayers.Where(x => x.Gender == "F");

            var rankedMenRatings = rankedMenPlayers.Select(x => x.Rating).Distinct().OrderByDescending(x=>x).ToList();
            var rankedWomenRatings = rankedWomenPlayers.Select(x => x.Rating).Distinct().OrderByDescending(x => x).ToList();

            var pendingPlayers = new List<Player>();

            _logger.LogInformation($"Total {players.Count} players, ranked {rankedPlayers.Count()} players");

            foreach (var player in players)
            {
                if (player.StDev < 100)
                {
                    // process national gender rankings
                    if(player.Gender == "M")
                    {
                        player.NationalGenderRanking = rankedMenRatings.IndexOf(player.Rating) + 1;

                        var rankedStateMenRatings = rankedMenPlayers.Where(x => x.State ==  player.State).Select(x=>x.Rating).Distinct().OrderByDescending(x => x).ToList();
                        player.StateGenderRanking = rankedStateMenRatings.IndexOf(player.Rating) + 1;
                    }

                    if (player.Gender == "F")
                    {
                        player.NationalGenderRanking = rankedWomenRatings.IndexOf(player.Rating) + 1;

                        var rankedStateWomenRatings = rankedWomenPlayers.Where(x => x.State == player.State).Select(x => x.Rating).Distinct().OrderByDescending(x => x).ToList();
                        player.StateGenderRanking = rankedStateWomenRatings.IndexOf(player.Rating) + 1;
                    }

                    _logger.LogInformation($"Update Ranking - {player.LastName}:{player.Id} .");
                }
                else
                {
                    player.NationalGenderRanking = 0;
                    player.StateGenderRanking = 0;
                }

                player.LastUpdated = DateTime.Now;
                player.RequireDeltaPush = true;

                pendingPlayers.Add(player);
            }

            await _playerRepository.UpsertManyAsync(pendingPlayers);
            _logger.LogInformation($"Finish updating ranking for {pendingPlayers.Count} players, only ranked {rankedPlayers.Count()} players.");
        }

        public async Task ImportPlayerSummary(string playerId = null)
        {
            var sw = new Stopwatch();
            sw.Start();
            var players = await _playerRepository.FilterByAsync(x => true);
            if (!string.IsNullOrEmpty(playerId))
            {
                players = players.Where(x => x.Id == playerId).ToList();
            }

            int numThreads = 10; // Number of threads for parallel importing
            List<Task> importTasks = new List<Task>();
            for (int i = 0; i < numThreads; i++)
            {
                importTasks.Add(UpdatePlayersSummary(players, i, numThreads));
            }
            await Task.WhenAll(importTasks);
            _logger.LogInformation($"Finish updating summary for {players.Count} players - {sw.Elapsed}.");
            sw.Stop();
        }

        public async Task ImportPlayerTeamClubs()
        {
            var teamNameDict = _sndttaScraper.GetTeamNames();
            var players = await _playerRepository.FilterByAsync(x => true);
            foreach(var player in players)
            {
                var clubIds = new List<string>();

                if(player.Team == null || !player.Team.Any())
                {
                    continue;
                }

                foreach(var teamName in player.Team)
                {
                    var clubId = teamNameDict?.FirstOrDefault(x => x.Name.Equals(teamName))?.ClubId;
                    clubId = clubId.Trim();

                    if (clubId != null && !clubIds.Contains(clubId))
                    {
                        clubIds.Add(clubId);
                    }
                }

                if (!clubIds.Contains(player.PrimaryClubId))
                {
                    clubIds.Add(player.PrimaryClubId);
                }

                player.ClubIds = clubIds;
                player.LastUpdated = DateTime.Now;
                player.RequireDeltaPush = true;

                await _playerRepository.UpsertAsync(player, x => x.Id == player.Id);
                _logger.LogInformation($"Updating clubIds for {player.FullName}:{player.Id}.");
            }
        }

        private async Task UpdatePlayersSummary(List<Player> players, int startIndex, int step)
        {
            var pendingPlayers = new List<Player>();
            for (int i = startIndex; i < players.Count; i += step)
            {
                var updated = await UpdatePlayerSummary(players[i]);
                updated.LastUpdated= DateTime.Now;
                updated.RequireDeltaPush = true;

                pendingPlayers.Add(updated);
            }
            await _playerRepository.UpsertManyAsync(pendingPlayers);
        }

        private async Task<Player> UpdatePlayerSummary(Player player)
        {
            var sw = new Stopwatch();
            sw.Start();
            var matches = await _matchRepository.FilterByAsync(x => x.PlayerIds.Contains(player.Id));
            //_logger.LogInformation($"load matches - {sw.Elapsed.TotalMilliseconds}");

            //example: {"Players":{$elemMatch:{"PlayerId":"67890"}}}
            var filter = Builders<TtEventPlayer>.Filter.ElemMatch<TtEventPlayerRating>(x=>x.Players, 
                Builders<TtEventPlayerRating>.Filter.Eq(y => y.PlayerId, player.Id));
            var eventPlayers = await _eventPlayerRepository.FilterByFilterDefinitionAsync(filter);

            //_logger.LogInformation($"load eventPlayers - {sw.Elapsed.TotalMilliseconds}");

            if (!matches.Any())
                return player;

            var matchPlayed6Months = matches.Where(x => x.MatchDate >= DateTime.Now.AddMonths(-6));
            player.PlayedMatchesLast6Mth = matchPlayed6Months.Count();
            player.MatchWinsLast6Mth = matchPlayed6Months.Count(x=>x.WinnerId == player.Id);

            // recent histories 6 months
            player.PlayedEventsLast6Mth = matchPlayed6Months.Select(x=>x.EventId).Distinct().Count();

            //_logger.LogInformation($"load 6months count - {sw.Elapsed.TotalMilliseconds}");

            player.RatingChangesLast6Mth = RatingChangesInPeriod(player.Id, eventPlayers, 6);
            player.RatingChangesMonthly = RatingChangesInPeriod(player.Id, eventPlayers, 1);
            player.RatingChangesQuarterly = RatingChangesInPeriod(player.Id, eventPlayers, 3);
            player.RatingChangesYearly = RatingChangesInPeriod(player.Id, eventPlayers, 12);

            player.RatingChangeEveryHalfYearHistory = RatingChangeEveryHalfYearHistory(player.Id, eventPlayers);

            //_logger.LogInformation($"load 6months rating-change - {sw.Elapsed.TotalMilliseconds}");

            var wins = matches.Count(x => x.WinnerId == player.Id);
            var loses = matches.Count(x => x.LoserId == player.Id);

            player.TotalWins = wins;
            player.TotalLoses = loses;
            player.TotalPlayedMatches= matches.Count();

            //_logger.LogInformation($"load total win/lose - {sw.Elapsed.TotalMilliseconds}");

            //year to date
            var yearToDateMatches = matches.Where(x => x.MatchDate >= new DateTime(DateTime.Now.Year, 1, 1));
            player.YearToDateWins = yearToDateMatches.Count(x=>x.WinnerId == player.Id);
            player.YearToDateLoses = yearToDateMatches.Count(x => x.LoserId == player.Id);

            //_logger.LogInformation($"year to date - {sw.Elapsed.TotalMilliseconds}");

            // first - fifth games
            SetMatchScoreStats(player, matches);

            //_logger.LogInformation($"5 games rate - {sw.Elapsed.TotalMilliseconds}");

            // beat higher player ratings, I am the winner, LoserOpponentMean => is my rating, WinnerOpponentMean => is my opponent rating
            player.TotalBeatHigherRatingPlayers = matches.Count(x => x.WinnerId == player.Id && x.LoserOpponentMean < x.WinnerOpponentMean);

            // lose lower player ratings, I am the loser, WinnerOpponentMean => is my rating, LoserOpponentMean => is my opponent rating
            player.TotalLostLowerRatingPlayers = matches.Count(x => x.LoserId == player.Id && x.WinnerOpponentMean > x.LoserOpponentMean);

            //_logger.LogInformation($"beat others - {sw.Elapsed.TotalMilliseconds}");

            // all opponents
            var opponentIds = new List<string>();
            var loserOpponents = matches.Where(x => x.WinnerId == player.Id).Select(x => x.LoserId);
            var winnerOpponents = matches.Where(x => x.LoserId == player.Id).Select(x => x.WinnerId);
            opponentIds = loserOpponents.Union(winnerOpponents).Distinct().ToList();
            player.TotalOpponentCount = opponentIds.Count;

            player.TotalBeatPlayersCount = loserOpponents.Distinct().Count();
            player.TotalLostPlayersCount = winnerOpponents.Distinct().Count();

            var winsWithoutLosingSet = matches.Count(x => x.WinnerId == player.Id && WinAllSets(x.Score));
            player.TotalWinsWithoutLosingAnySet = winsWithoutLosingSet;

            //_logger.LogInformation($"opponents - {sw.Elapsed.TotalMilliseconds}");


            // is junior
            var allEvents = matches.Select(x => new { EventId = x.EventId, Name = x.EventName }).Distinct().ToList();
            player.IsJunior = allEvents.Any(x=>x.Name.ToLower().Contains("junior"));

           // _logger.LogInformation($"junior - {sw.Elapsed.TotalMilliseconds}");

            // total events
            player.TotalPlayedEvents = allEvents.Select(x=>x.EventId).Distinct().Count();

            // last played event
            var orderedMatches = matches.OrderByDescending(x=>x.MatchDate).ToList();
            var lastEvent = orderedMatches.FirstOrDefault();
            if (lastEvent != null)
            {
                var selectedPlayer = eventPlayers.FirstOrDefault(x=>x.Id == lastEvent.Id)?.Players?.FirstOrDefault(x=>x.PlayerId == player.Id);
                player.LastPlayedEvent = lastEvent.EventName;
                if(selectedPlayer != null)
                {
                    player.LastPlayedEventRatingChange = selectedPlayer.PointChange;
                }
            }

            //_logger.LogInformation($"last played event - {sw.Elapsed.TotalMilliseconds}");

            // first match date
            var firstHistory = orderedMatches.LastOrDefault();
            if (firstHistory != null)
            {
                player.StartPlayingDate = firstHistory.MatchDate;
            }

            //_logger.LogInformation($"first match date - {sw.Elapsed.TotalMilliseconds}");

            //highest rating
            var highestRating = GetHighestRating(matches, player);
            player.HighestRating = highestRating.Item1;
            player.HighestRatingStDev = highestRating.Item2;

            //_logger.LogInformation($"highest rating - {sw.Elapsed.TotalMilliseconds}");

            _logger.LogInformation($"update player summary {player.FullName}:{player.Id} - Time {sw.Elapsed}");
            sw.Stop();

            return player;
        }

        private void SetMatchScoreStats(Player player, List<Match> matches)
        {
            // first - fifth games
            var firstGameWins = matches.Select(x => WinGame(0, player.Id, x));
            player.WinRateFirstGame = TryDivide(firstGameWins.Count(x => x == true), firstGameWins.Count(x => x.HasValue));

            var secondGameWins = matches.Select(y => WinGame(1, player.Id, y));
            player.WinRateSecondGame = TryDivide(secondGameWins.Count(y => y == true), secondGameWins.Count(x => x.HasValue));

            var thirdGameWins = matches.Select(x => WinGame(2, player.Id, x));
            player.WinRateThirdGame = TryDivide(thirdGameWins.Count(x => x == true), thirdGameWins.Count(x => x.HasValue));

            var fourthGameWins = matches.Select(x => WinGame(3, player.Id, x));
            player.WinRateFourthGame = TryDivide(fourthGameWins.Count(z => z == true), fourthGameWins.Count(x => x.HasValue));

            var fifthGameWins = matches.Select(x => WinGame(4, player.Id, x));
            player.WinRateFifthGame = TryDivide(fifthGameWins.Count(x => x == true), fifthGameWins.Count(x => x.HasValue));

            // stats of each match score
            var matchScoreStats = new List<MatchScoreStats>();
            var winGroups = from m in matches
                            where m.WinnerId == player.Id && !string.IsNullOrEmpty(m.Score.Trim())
                            group m by new { Score = $"{m.WinnerSetWins}:{m.LoserSetWins}", TotalSets = m.WinnerSetWins.GetTotalSets() } into g1
                            select new MatchScoreStats
                            {
                                Score = g1.Key.Score,
                                TotalSets = g1.Key.TotalSets,
                                IsWin = true,
                                Count = g1.Count()
                            };

            matchScoreStats.AddRange(winGroups);

            var loseGroups = from m in matches
                            where m.LoserId == player.Id && !string.IsNullOrEmpty(m.Score.Trim())
                             group m by new { Score = $"{m.LoserSetWins}:{m.WinnerSetWins}", TotalSets = m.WinnerSetWins.GetTotalSets() } into g1
                            select new MatchScoreStats
                            {
                                Score = g1.Key.Score,
                                TotalSets = g1.Key.TotalSets,
                                IsWin = false,
                                Count = g1.Count()
                            };

            matchScoreStats.AddRange(loseGroups);
            player.MatchScoreStats = matchScoreStats;
        }

        private int RatingChangesInPeriod(string playerId, List<TtEventPlayer> eventPlayers, int months)
        {
            var eventsInPeriod = eventPlayers.Where(x => x.EventDate >= DateTime.Now.AddMonths(months * -1)).OrderByDescending(x => x.EventDate);
            if (eventsInPeriod.Any())
            {
                var playerLastEvent = eventsInPeriod.FirstOrDefault()?.Players.FirstOrDefault(x => x.PlayerId == playerId);
                var playerFirstEvent = eventsInPeriod.LastOrDefault()?.Players.FirstOrDefault(x => x.PlayerId == playerId);

                if (playerLastEvent != null && playerFirstEvent != null)
                {
                    return playerLastEvent.FinalMean - playerFirstEvent.InitialMean;
                }
            }

            return 0;
        }

        private List<PlayerRatingChange> RatingChangeEveryHalfYearHistory(string playerId, List<TtEventPlayer> eventPlayers)
        {
            var results = new List<PlayerRatingChange>();
            var orderedEventPlayers = eventPlayers.Where(x => x.Players.Any(o => o.PlayerId == playerId)).OrderBy(x => x.EventDate).ToList();

            if(!orderedEventPlayers.Any())
            {
                return results;
            }

            var initialDate = orderedEventPlayers.FirstOrDefault().EventDate;
            var halfYearDates = initialDate.GetHalfYearStartAndEndDates();
            var previousRating = 0;

            foreach (var date in halfYearDates)
            {
                int rating = 0;

                var eventsInPeriod = orderedEventPlayers.Where(x => x.EventDate >= date.Value.Item1 && x.EventDate < date.Value.Item2).OrderByDescending(x => x.EventDate);
                if (eventsInPeriod.Any())
                {
                    var playerLastEvent = eventsInPeriod.FirstOrDefault()?.Players.FirstOrDefault(x => x.PlayerId == playerId);

                    if (playerLastEvent != null)
                    {
                        rating = playerLastEvent.FinalMean;
                        previousRating = rating;
                    }
                }
                else
                {
                    // for this period, we don't find any events, so consider rating didn't change. so we set to previous rating
                    rating = previousRating;
                }

                results.Add(new PlayerRatingChange { Period = date.Key , Rating = rating });
            }

            return results;
        }
  

        private (int, int) GetHighestRating(List<Match> matches, Player player)
        {
            var wins = matches.Where(x => x.WinnerId == player.Id).Select(x => new { Rating = x.LoserOpponentMean, StDev = x.LoserOpponentStDev });
            var loses = matches.Where(x => x.LoserId == player.Id).Select(x => new { Rating = x.WinnerOpponentMean, StDev = x.WinnerOpponentStDev});
            var total = wins.Union(loses);
            var highest = total.OrderByDescending(x => x.Rating).FirstOrDefault();
            return (highest.Rating, highest.StDev);
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
