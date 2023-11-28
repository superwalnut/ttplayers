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
    [BsonCollection("Events")]
    [FirebaseCollection("Events")]
    [FirestoreData]
    public class TtEvent : IDocument
    {
        [BsonElement("_id")]
        [BsonId]
        [FirestoreProperty]
        public string? Id { get; set; }
        [FirestoreProperty]
        public string Name { get; set; }
        [FirestoreProperty]
        public DateTime Date { get; set; }

        [FirestoreProperty]
        public string Director { get; set; }

        [FirestoreProperty]
        public string State { get; set; }
    
        [FirestoreProperty]
        public string Country { get; set; }

        [FirestoreProperty]
        public DateTime? SubmittedDate { get; set; }
        [FirestoreProperty]
        public DateTime? RevisedDate { get; set; }
        [FirestoreProperty]
        public DateTime? LastProcessedDate { get; set; }

        [FirestoreProperty]
        public string ClubId { get; set; }

        [FirestoreProperty]
        public string ClubName { get; set; }

        [FirestoreProperty]
        public int PlayerCount { get; set; }

        [FirestoreProperty]
        public int MatchCount { get; set; }

        [FirestoreProperty]
        public List<string> Tags { get; set; }

        [FirestoreProperty]
        public DateTime LastUpdated { get; set; }

        // properties to push to firebase
        public DateTime? LastDeltaPushDate { get; set; }
        public bool RequireDeltaPush { get; set; }

    }
}
