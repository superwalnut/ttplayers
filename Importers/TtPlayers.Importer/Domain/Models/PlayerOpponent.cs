using Google.Cloud.Firestore;

namespace TtPlayers.Importer.Domain.Models
{
    [FirestoreData]
    public class PlayerOpponent
    {
        [FirestoreProperty]
        public string? Id { get; set; }

        [FirestoreProperty]
        public string? FullName { get; set; }

        [FirestoreProperty]
        public List<PlayerOpponentMatch> Matches { get; set; }
    }

    [FirestoreData]
    public class PlayerOpponentMatch
    {
        [FirestoreProperty]
        public string? Id { get; set; }

        [FirestoreProperty]
        public DateTime MatchDate { get; set; }

        [FirestoreProperty]
        public string WinnerId { get; set; }

        [FirestoreProperty]
        public string LoserId { get; set; }

        [FirestoreProperty]
        public int? WinnerSetWins { get; set; }

        [FirestoreProperty]
        public List<int> WinnerSetScores { get; set; }

        [FirestoreProperty]
        public int? LoserSetWins { get; set; }

        [FirestoreProperty]
        public List<int> LoserSetScores { get; set; }

    }
}
