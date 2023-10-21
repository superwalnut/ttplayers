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
        Task PushEventMatches();

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
            foreach (var player in players)
            {
                await _firebasePlayerRepository.Update(player);

                player.RequireDeltaPush = false;
                player.LastDeltaPushDate = DateTime.Now;
                await _playerRepository.UpsertAsync(player, x=>x.Id== player.Id);
                _logger.LogInformation($"Pushing {player.FullName}:{player.Id} player to firebase");
            }
        }

        public async Task PushPlayerHistories()
        {
            var histories = await _playerHistoryRepository.FilterByAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Pushing {histories.Count} player-history to firebase");
            foreach (var history in histories)
            {
                await _firebasePlayerHistoryRepository.Update(history);

                history.RequireDeltaPush = false;
                history.LastDeltaPushDate = DateTime.Now;
                await _playerHistoryRepository.UpsertAsync(history, x => x.Id == history.Id);
                _logger.LogInformation($"Pushing player:{history.Id} history to firebase");
            }
        }

        public async Task PushEvents()
        {
            var events = await _eventRepository.FilterByAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Pushing {events.Count} events to firebase");
            foreach (var evt in events)
            {
                await _firebaseEventRepository.Update(evt);

                evt.RequireDeltaPush = false;
                evt.LastDeltaPushDate = DateTime.Now;
                await _eventRepository.UpsertAsync(evt, x => x.Id == evt.Id);
                _logger.LogInformation($"Pushing event {evt.Name}:{evt.Id} to firebase");
            }
        }

        public async Task PushEventMatches()
        {
            var matches = await _matchRepository.FilterByAsync(x => x.RequireDeltaPush && x.MatchDate > DateTime.Now.AddMonths(-4));
            _logger.LogInformation($"Pushing {matches.Count} matches with match details to firebase");

            foreach (var match in matches)
            {
                await _firebaseEventMatchesRepository.Update(match);
                _logger.LogInformation($"Pushed event:{match.EventId} - match:{match.Id} - between {match.WinnerId}-vs-{match.LoserId}...");

                match.RequireDeltaPush = false;
                match.LastDeltaPushDate = DateTime.Now;
                await _matchRepository.UpsertAsync(match, x=>x.Id == match.Id);
                _logger.LogInformation($"Pushing event:{match.Id} matches to firebase");
            }
        }

        public async Task PushClubs()
        {
            var clubs = await _clubRepository.FilterByAsync(x => x.RequireDeltaPush);
            _logger.LogInformation($"Pushing {clubs.Count} clubs to firebase");
            foreach(var club in clubs)
            {
                await _firebaseClubRepository.Update(club);
                club.RequireDeltaPush = false;
                club.LastDeltaPushDate = DateTime.Now;
                await _clubRepository.UpsertAsync(club, x => x.Id == club.Id);
                _logger.LogInformation($"Pushed club:{club.Name}:{club.Id}...");
            }
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
