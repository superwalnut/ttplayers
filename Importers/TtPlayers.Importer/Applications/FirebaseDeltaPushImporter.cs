using Microsoft.Extensions.Logging;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;
using static System.Reflection.Metadata.BlobBuilder;

namespace TtPlayers.Importer.Applications
{
    public interface IFirebaseDeltaPushImporter
    {
        Task PushPlayers(string playerId = null);
        Task PushPlayerHistories();
        Task PushEvents(bool forceAll = false);
        
        Task PushEventPlayers(bool forceAll = false, string playerId = null);
        Task PushEventPlayersByEventId(string eventId);

        Task PushEventMatches(string playerId = null, int? actionCount = 10000);
        Task PushEventMatchesForActivePlayers();
        Task PushEventMatchesByEventId(string eventId);

        Task PushClubs();

        Task PushSndttaTeams();
        Task PushSndttaUpcomingEvents();

        Task PushStatistics();

        Task PushOpponents(string playerId = null);

        Task ShowPendingPushSummary();
    }

    public class FirebaseDeltaPushImporter : IFirebaseDeltaPushImporter
    {
        private readonly ILogger<FirebaseDeltaPushImporter> _logger;
        private readonly IDocumentRepository<Player> _playerRepository;
        private readonly IDocumentRepository<PlayerHistory> _playerHistoryRepository;
        private readonly IDocumentRepository<TtEvent> _eventRepository;
        private readonly IDocumentRepository<Match> _matchRepository;
        private readonly IDocumentRepository<SndttaTeam> _sndttaTeamRepository;
        private readonly IDocumentRepository<SndttaUpcomingEvent> _upcomingEventRepository;
        private readonly IDocumentRepository<Club> _clubRepository;
        private readonly IDocumentRepository<TtEventPlayer> _eventPlayerRepository;
        private readonly IDocumentRepository<Statistics> _statisticsRepository;
        private readonly IDocumentRepository<PlayerOpponentList> _playerOpponentListRepository;

        private readonly IFireBaseRepository<Player> _firebasePlayerRepository;
        private readonly IFireBaseRepository<PlayerHistory> _firebasePlayerHistoryRepository;
        private readonly IFireBaseRepository<TtEvent> _firebaseEventRepository;
        private readonly IFireBaseRepository<Match> _firebaseEventMatchesRepository;
        private readonly IFireBaseRepository<SndttaTeam> _firebaseSndttaTeamRepository;
        private readonly IFireBaseRepository<SndttaUpcomingEvent> _firebaseUpcomingEventRepository;
        private readonly IFireBaseRepository<Club> _firebaseClubRepository;
        private readonly IFireBaseRepository<TtEventPlayer> _firebaseEventPlayerRepository;
        private readonly IFireBaseRepository<Statistics> _firebaseStatisticsRepository;
        private readonly IFireBaseRepository<PlayerOpponentList> _firebasePlayerOpponentListRepository;

        public FirebaseDeltaPushImporter(ILogger<FirebaseDeltaPushImporter> logger, 
            IDocumentRepository<Player> playerRepository,
            IDocumentRepository<PlayerHistory> playerHistoryRepository,
            IDocumentRepository<TtEvent> eventRepository,
            IDocumentRepository<Match> matchRepository,
            IDocumentRepository<SndttaTeam> sndttaTeamRepository,
            IDocumentRepository<SndttaUpcomingEvent> upcomingEventRepository,
            IDocumentRepository<Club> clubRepository,
            IDocumentRepository<TtEventPlayer> eventPlayerRepository,
            IDocumentRepository<Statistics> statisticsRepository,
            IDocumentRepository<PlayerOpponentList> playerOpponentListRepository,
            IFireBaseRepository<Player> firebasePlayerRepository,
            IFireBaseRepository<PlayerHistory> firebasePlayerHistoryRepository,
            IFireBaseRepository<Match> firebaseEventMatchesRepository,
            IFireBaseRepository<SndttaTeam> firebaseSndttaTeamRepository,
            IFireBaseRepository<TtEvent> firebaseEventRepository, 
            IFireBaseRepository<SndttaUpcomingEvent> firebaseUpcomingEventRepository,
            IFireBaseRepository<Club> firebaseClubRepository,
            IFireBaseRepository<TtEventPlayer> firebaseEventPlayerRepository,
            IFireBaseRepository<Statistics> firebaseStatisticsRepository,
            IFireBaseRepository<PlayerOpponentList> firebasePlayerOpponentListRepository
            )
        {
            _logger = logger;
            _playerRepository = playerRepository;
            _firebasePlayerRepository = firebasePlayerRepository;
            _firebasePlayerHistoryRepository = firebasePlayerHistoryRepository;
            _playerHistoryRepository = playerHistoryRepository;
            _eventRepository = eventRepository;
            _firebaseEventRepository = firebaseEventRepository;
            _matchRepository = matchRepository;
            _firebaseEventMatchesRepository = firebaseEventMatchesRepository;
            _sndttaTeamRepository = sndttaTeamRepository;
            _firebaseSndttaTeamRepository = firebaseSndttaTeamRepository;
            _upcomingEventRepository = upcomingEventRepository;
            _firebaseUpcomingEventRepository = firebaseUpcomingEventRepository;
            _clubRepository = clubRepository;
            _firebaseClubRepository = firebaseClubRepository;
            _eventPlayerRepository = eventPlayerRepository;
            _firebaseEventPlayerRepository= firebaseEventPlayerRepository;
            _firebaseStatisticsRepository = firebaseStatisticsRepository;
            _statisticsRepository = statisticsRepository;
            _playerOpponentListRepository = playerOpponentListRepository;
            _firebasePlayerOpponentListRepository = firebasePlayerOpponentListRepository;

        }

        public async Task PushPlayers(string playerId = null)
        {
            var players = new List<Player>();
            if (!string.IsNullOrEmpty(playerId))
            {
                players = await _playerRepository.FilterByAsync(x => x.Id == playerId);
            }
            else
            {
                players = await _playerRepository.FilterByAsync(x => x.RequireDeltaPush);
            }
            
            _logger.LogInformation($"Pushing {players.Count} players to firebase");

            await _firebasePlayerRepository.UpdateBulk(players);

            players.ForEach(x =>
            {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });
            
            var result = await _playerRepository.UpsertManyAsync(players);
            _logger.LogInformation($"Pushed player to firebase completed with status {result}");
        }

        [Obsolete]
        public async Task PushPlayerHistories()
        {
            var histories = await _playerHistoryRepository.FilterByAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Pushing {histories.Count} player-history to firebase");

            await _firebasePlayerHistoryRepository.UpdateBulk(histories);

            histories.ForEach(x =>
            {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });

            var result = await _playerHistoryRepository.UpsertManyAsync(histories);
            _logger.LogInformation($"Pushing player history to firebase completed with status {result}");
        }

        public async Task PushEvents(bool forceAll = false)
        {
            var events = new List<TtEvent>();
            if (!forceAll)
            {
                events = await _eventRepository.FilterByAsync(x => x.RequireDeltaPush);
            } else
            {
                events = await _eventRepository.FilterByAsync(x => true);
            }
            
            _logger.LogInformation($"Pushing {events.Count} events to firebase");

            await _firebaseEventRepository.UpdateBulk(events);

            events.ForEach(x => {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });

            var result = await _eventRepository.UpsertManyAsync(events);
            _logger.LogInformation($"Pushing event to firebase completed with status {result}");
        }

        public async Task PushEventPlayers(bool forceAll = false, string playerId = null)
        {
            var eventPlayers = new List<TtEventPlayer>();
            if (!forceAll)
            {
                if (string.IsNullOrEmpty(playerId))
                {
                    eventPlayers = await _eventPlayerRepository.FilterByAsync(x => x.RequireDeltaPush);
                }
                else
                {
                    eventPlayers = await _eventPlayerRepository.FilterByAsync(x => x.Id == playerId);
                }
            } 
            else
            {
                eventPlayers = await _eventPlayerRepository.FilterByAsync(x => true);
            }

            _logger.LogInformation($"Pushing {eventPlayers.Count} event-players to firebase");

            await _firebaseEventPlayerRepository.UpdateBulk(eventPlayers);

            eventPlayers.ForEach(x => {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });

            var result = await _eventPlayerRepository.UpsertManyAsync(eventPlayers);
            _logger.LogInformation($"Pushing event to firebase completed with status {result}");
        }

        public async Task PushEventPlayersByEventId(string eventId)
        {
            var eventPlayers = await _eventPlayerRepository.FilterByAsync(x => x.RequireDeltaPush && x.Id == eventId);
            _logger.LogInformation($"Pushing {eventPlayers.Count} event-players to firebase");

            await _firebaseEventPlayerRepository.UpdateBulk(eventPlayers);

            eventPlayers.ForEach(x => {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });

            var result = await _eventPlayerRepository.UpsertManyAsync(eventPlayers);
            _logger.LogInformation($"Pushing event to firebase completed with status {result}");
        }

        public async Task PushEventMatches(string playerId = null, int? actionCount = 10000)
        {
            var matches = new List<Match>();

            if (!actionCount.HasValue)
            {
                actionCount = 10000;
            }
            
            if(!string.IsNullOrEmpty(playerId))
            {
                matches = await _matchRepository.FilterByAsyncOrderByDesending(x => x.RequireDeltaPush && x.PlayerIds.Contains(playerId), x => x.MatchDate, 0, actionCount.Value);
            }
            else
            {
                matches = await _matchRepository.FilterByAsyncOrderByDesending(x => x.RequireDeltaPush, x => x.MatchDate, 0, actionCount.Value);
            }

            _logger.LogInformation($"Pushing {matches.Count} matches with match details to firebase");

            await _firebaseEventMatchesRepository.UpdateBulk(matches);

            matches.ForEach(x => {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });

            var result = await _matchRepository.UpsertManyAsync(matches);
            _logger.LogInformation($"Pushing matches to firebase completed with status {result}");
        }

        public async Task PushEventMatchesByEventId(string eventId)
        {
            var matches = await _matchRepository.FilterByAsync(x => x.RequireDeltaPush && x.EventId == eventId);
            _logger.LogInformation($"Pushing {matches.Count} matches with match details to firebase");

            await _firebaseEventMatchesRepository.UpdateBulk(matches);

            matches.ForEach(x => {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });

            var result = await _matchRepository.UpsertManyAsync(matches);
            _logger.LogInformation($"Pushing matches to firebase completed with status {result}");
        }

        public async Task PushEventMatchesForActivePlayers()
        {
            var matches = new List<Match>();

            var date = DateTime.Now.AddMonths(-3);
            var players = await _playerRepository.FilterByAsync(x => x.LastPlayed > date);
            var index = players.Count;

            _logger.LogInformation($"found {players.Count} players to import their matches");

            foreach (var player in players)
            {
                matches = await _matchRepository.FilterByAsync(x => x.RequireDeltaPush && (x.WinnerId == player.Id || x.LoserId == player.Id));
                _logger.LogInformation($"{index} - Pushing {player.FullName}:{player.Id} - {matches.Count} matches with match details to firebase");

                await _firebaseEventMatchesRepository.UpdateBulk(matches);

                matches.ForEach(x => {
                    x.RequireDeltaPush = false;
                    x.LastDeltaPushDate = DateTime.Now;
                });

                var result = await _matchRepository.UpsertManyAsync(matches);
                _logger.LogInformation($"Pushing matches to firebase completed with status {result}");

                index--;
            }
        }

        public async Task PushClubs()
        {
            var clubs = await _clubRepository.FilterByAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Pushing {clubs.Count} clubs to firebase");

            await _firebaseClubRepository.UpdateBulk(clubs);

            clubs.ForEach(x => {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });

            var result = await _clubRepository.UpsertManyAsync(clubs);
            _logger.LogInformation($"Pushed club to firebase completed with status {result}");
        }

        public async Task PushOpponents(string playerId = null)
        {
            var opponents = new List<PlayerOpponentList>();

            if (!string.IsNullOrEmpty(playerId))
            {
                opponents = await _playerOpponentListRepository.FilterByAsync(x => x.Id == playerId);
            }
            else
            {
                opponents = await _playerOpponentListRepository.FilterByAsync(x => x.RequireDeltaPush);
            }

            _logger.LogInformation($"Pushing {opponents.Count} players' oppponets to firebase");

            await _firebasePlayerOpponentListRepository.UpdateBulk(opponents, 50);

            opponents.ForEach(x => {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });

            var result = await _playerOpponentListRepository.UpsertManyAsync(opponents);
            _logger.LogInformation($"Pushed players' opponents to firebase completed with status {result}");
        }

        public async Task PushSndttaTeams()
        {
            var sndttaTeams = await _sndttaTeamRepository.FilterByAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Pushing {sndttaTeams.Count} sndttaTeams to firebase");
            foreach (var team in sndttaTeams)
            {
                await _firebaseSndttaTeamRepository.Update(team);
                _logger.LogInformation($"Pushing {team.Id} team to firebase");
            }

            sndttaTeams.ForEach(x => {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });

            var result = await _sndttaTeamRepository.UpsertManyAsync(sndttaTeams);
            _logger.LogInformation($"Pushed club to firebase completed with status {result}");

        }

        public async Task PushSndttaUpcomingEvents()
        {
            var sndttaUpcomingEvents = await _upcomingEventRepository.FilterByAsync(x => true);
            _logger.LogInformation($"Pushing {sndttaUpcomingEvents.Count} upcoming sndtta events to firebase");
            foreach (var upcoming in sndttaUpcomingEvents)
            {
                await _firebaseUpcomingEventRepository.Update(upcoming);
                _logger.LogInformation($"Pushing {upcoming.Date}-{upcoming.HomeTeamName}-vs-{upcoming.AwayTeamName} upcoming event to firebase");
            }
        }

        public async Task PushStatistics()
        {
            var items = await _statisticsRepository.FilterByAsyncOrderByDesending(x => true, x=>x.CreatedDate, 0, 1);
            _logger.LogInformation($"Pushing {items.Count} statistics");
            foreach (var item in items)
            {
                await _firebaseStatisticsRepository.Update(item);
                _logger.LogInformation($"Pushing {item.Id} statistics to firebase");
            }

        }

        public async Task ShowPendingPushSummary()
        {
            var clubs = await _clubRepository.CountAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Clubs: {clubs} pending to push");

            var events = await _eventRepository.CountAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Events: {events} pending to push");

            var eventPlayers = await _eventPlayerRepository.CountAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Event-Players: {eventPlayers} pending to push");

            var matches = await _matchRepository.CountAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Event-Matches: {matches} pending to push");

            var players = await _playerRepository.CountAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Players: {players} pending to push");

            var sndttaTeams = await _sndttaTeamRepository.CountAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Teams: {sndttaTeams} pending to push");

            var opponents = await _playerOpponentListRepository.CountAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Opponents: {opponents} pending to push");
        }
    }
}
