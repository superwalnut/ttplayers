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
    [BsonCollection("SndttaUpcomingEvent")]
    [FirebaseCollection("SndttaUpcomingEvent")]
    [FirestoreData]
    public class SndttaUpcomingEvent : IDocument
    {
        [BsonElement("_id")]
        [BsonId]
        [FirestoreProperty]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [FirestoreProperty]
        public int Round { get; set; }

        [FirestoreProperty]
        public string Date { get; set; }

        [FirestoreProperty]
        public string? Time { get; set; }

        [FirestoreProperty]
        public string Division { get; set; }

        [FirestoreProperty]
        public string HomeTeamName { get; set; }

        [FirestoreProperty]
        public string AwayTeamName { get; set; }

        [FirestoreProperty]
        public string Location { get; set; }
    }
}
