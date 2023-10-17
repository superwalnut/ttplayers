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
        public List<string> PlayerIds { get; set; }

        [FirestoreProperty]
        public DateTime MatchDate { get; set; }

        [FirestoreProperty]
        public string WinnerId { get; set; }
        [FirestoreProperty]
        public string LoserId { get; set; }
        [FirestoreProperty]
        public string Score { get; set; }
        [FirestoreProperty]
        public string WinnerDelta { get; set; }
        [FirestoreProperty]
        public string WinnerOpponentMean { get; set; }
        [FirestoreProperty]
        public string WinnerOpponentStDev { get; set; }
        [FirestoreProperty]
        public string LoserDelta { get; set; }
        [FirestoreProperty]
        public string LoserOpponentMean { get; set; }
        [FirestoreProperty]
        public string LoserOpponentStDev { get; set; }
        [FirestoreProperty]
        public string MatchesPairPlayed { get; set; }

        [FirestoreProperty]
        public DateTime LastUpdated { get; set; }

        // properties to push to firebase
        public DateTime? LastDeltaPushDate { get; set; }
        public bool RequireDeltaPush { get; set; }

    }
}
