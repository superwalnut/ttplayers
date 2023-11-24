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
    [BsonCollection("Statistics")]
    [FirebaseCollection("Statistics")]
    [FirestoreData]
    public class Statistics : IDocument
    {
        [BsonElement("_id")]
        [BsonId]
        [FirestoreProperty]
        public string? Id { get; set; }

        [FirestoreProperty]
        public DateTime CreatedDate { get; set; }

        [FirestoreProperty]
        public int TotalPlayerCount { get; set; }

        [FirestoreProperty]
        public Dictionary<string, int> StatePlayerCounts { get; set; }

        [FirestoreProperty]
        public int TotalMenPlayerCount { get; set; }

        [FirestoreProperty]
        public Dictionary<string, int> StateMenPlayerCounts { get; set; }

        [FirestoreProperty]
        public int TotalWomenPlayerCount { get; set; }

        [FirestoreProperty]
        public Dictionary<string, int> StateWomenPlayerCounts { get; set; }

        [FirestoreProperty]
        public int TotalEventCount { get; set; }

        [FirestoreProperty]
        public Dictionary<string, int> StateEventCounts { get; set; }

        [FirestoreProperty]
        public int TotalMatchCount {get;set;}

        [FirestoreProperty]
        public Dictionary<string, int> StateMatchCounts { get; set; }

        [FirestoreProperty]
        public int ActivePlayerCount { get; set; }

        [FirestoreProperty]
        public Dictionary<string, int> StateActivePlayerCounts { get; set; }

        [FirestoreProperty]
        public int TotalClubCount { get; set; }

        [FirestoreProperty]
        public Dictionary<string, int> StateClubCounts { get; set; }

        [FirestoreProperty]
        public double AverageWinRate { get; set; }

        [FirestoreProperty]
        public Dictionary<string,double> StateAverageRates { get; set; }

        [FirestoreProperty]
        public Dictionary<string, int> MatchPlayedGroups { get; set; } 

    }
}
