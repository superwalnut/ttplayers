using Microsoft.Extensions.Logging;
using TtPlayers.Importer.Domain.Models;
using TtPlayers.Importer.Domain.Repositories;

namespace TtPlayers.Importer.Applications
{
    public interface IFirebaseDeltaPushImporter
    {
        Task PushPlayers();
        Task PushPlayerHistories();
        Task PushEvents();
        Task PushEventMatches(string playerId = null);

        Task PushClubs();

        Task PushSndttaTeams();
        Task PushSndttaUpcomingEvents();
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

        private readonly IFireBaseRepository<Player> _firebasePlayerRepository;
        private readonly IFireBaseRepository<PlayerHistory> _firebasePlayerHistoryRepository;
        private readonly IFireBaseRepository<TtEvent> _firebaseEventRepository;
        private readonly IFireBaseRepository<Match> _firebaseEventMatchesRepository;
        private readonly IFireBaseRepository<SndttaTeam> _firebaseSndttaTeamRepository;
        private readonly IFireBaseRepository<SndttaUpcomingEvent> _firebaseUpcomingEventRepository;
        private readonly IFireBaseRepository<Club> _firebaseClubRepository;

        public FirebaseDeltaPushImporter(ILogger<FirebaseDeltaPushImporter> logger, 
            IDocumentRepository<Player> playerRepository,
            IDocumentRepository<PlayerHistory> playerHistoryRepository,
            IDocumentRepository<TtEvent> eventRepository,
            IDocumentRepository<Match> matchRepository,
            IDocumentRepository<SndttaTeam> sndttaTeamRepository,
            IDocumentRepository<SndttaUpcomingEvent> upcomingEventRepository,
            IDocumentRepository<Club> clubRepository,
            IFireBaseRepository<Player> firebasePlayerRepository,
            IFireBaseRepository<PlayerHistory> firebasePlayerHistoryRepository,
            IFireBaseRepository<Match> firebaseEventMatchesRepository,
            IFireBaseRepository<SndttaTeam> firebaseSndttaTeamRepository,
            IFireBaseRepository<TtEvent> firebaseEventRepository, 
            IFireBaseRepository<SndttaUpcomingEvent> firebaseUpcomingEventRepository,
            IFireBaseRepository<Club> firebaseClubRepository)
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
        }

        public async Task PushPlayers()
        {
            var players = await _playerRepository.FilterByAsync(x => x.RequireDeltaPush);
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

        public async Task PushEvents()
        {
            var events = await _eventRepository.FilterByAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Pushing {events.Count} events to firebase");

            await _firebaseEventRepository.UpdateBulk(events);

            events.ForEach(x => {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });

            var result = await _eventRepository.UpsertManyAsync(events);
            _logger.LogInformation($"Pushing event to firebase completed with status {result}");
        }

        public async Task PushEventMatches(string playerId = null)
        {
            var matches = await _matchRepository.FilterByAsync(x => 
                x.RequireDeltaPush && 
                x.MatchDate > DateTime.Now.AddMonths(-4) &&
                (string.IsNullOrEmpty(playerId) || (!string.IsNullOrEmpty(playerId) && x.PlayerIds.Contains(playerId)))
                );

            _logger.LogInformation($"Pushing {matches.Count} matches with match details to firebase");

            await _firebaseEventMatchesRepository.UpdateBulk(matches);

            matches.ForEach(x => {
                x.RequireDeltaPush = false;
                x.LastDeltaPushDate = DateTime.Now;
            });

            var result = await _matchRepository.UpsertManyAsync(matches);
            _logger.LogInformation($"Pushing matches to firebase completed with status {result}");
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

        public async Task PushSndttaTeams()
        {
            var sndttaTeams = await _sndttaTeamRepository.FilterByAsync(x => true);
            _logger.LogInformation($"Pushing {sndttaTeams.Count} sndttaTeams to firebase");
            foreach (var team in sndttaTeams)
            {
                await _firebaseSndttaTeamRepository.Update(team);
                _logger.LogInformation($"Pushing {team.Id} team to firebase");
            }
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
    }
}
