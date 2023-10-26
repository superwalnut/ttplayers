using Google.Cloud.Firestore;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.Attributes;

namespace TtPlayers.Importer.Domain.Models
{
    [BsonCollection("Matches")]
    [FirebaseCollection("Matches")]
    [FirestoreData]
    public class Match : IDocument
    {
        [BsonElement("_id")]
        [BsonId]
        [FirestoreProperty]
        public string? Id { get; set; } // this is the rating central ID

        [FirestoreProperty]
        public string EventId { get; set; }

        [FirestoreProperty]
        public string EventName { get; set; }

        [FirestoreProperty]
        public List<string> PlayerIds { get; set; }

        [FirestoreProperty]
        public DateTime MatchDate { get; set; }

        [FirestoreProperty]
        public string WinnerId { get; set; }

        [FirestoreProperty] 
        public string WinnerName { get; set; }

        [FirestoreProperty]
        public string LoserId { get; set; }

        [FirestoreProperty] 
        public string LoserName { get; set;}

        [FirestoreProperty]
        public string Score { get; set; }

        [FirestoreProperty]
        public int? WinnerSetWins { get; set; }

        [FirestoreProperty]
        public List<int> WinnerSetScores { get;set; }

        [FirestoreProperty]
        public int? LoserSetWins { get; set; }

        [FirestoreProperty]
        public List<int> LoserSetScores { get; set; }

        [FirestoreProperty]
        public int WinnerDelta { get; set; }
        [FirestoreProperty]
        public int WinnerOpponentMean { get; set; }
        [FirestoreProperty]
        public int WinnerOpponentStDev { get; set; }
        [FirestoreProperty]
        public int LoserDelta { get; set; }
        [FirestoreProperty]
        public int LoserOpponentMean { get; set; }
        [FirestoreProperty]
        public int LoserOpponentStDev { get; set; }
        [FirestoreProperty]
        public int MatchesPairPlayed { get; set; }

        [FirestoreProperty]
        public DateTime LastUpdated { get; set; }

        // properties to push to firebase
        public DateTime? LastDeltaPushDate { get; set; }
        public bool RequireDeltaPush { get; set; }

    }
}
