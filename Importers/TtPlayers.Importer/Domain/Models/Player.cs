using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Google.Cloud.Firestore;
using TtPlayers.Importer.Domain.Attributes;

namespace TtPlayers.Importer.Domain.Models
{
    [BsonCollection("Players")]
    [FirebaseCollection("Players")]
    [FirestoreData]
    public class Player : IDocument
    {
        [BsonElement("_id")]
        [BsonId]
        [FirestoreProperty]
        public string? Id { get; set; } // this is the rating central ID

        [FirestoreProperty]
        public string? FullName { get; set; }
        [FirestoreProperty]
        public string FirstName { get; set; }
        [FirestoreProperty]
        public string LastName { get; set; }

        [FirestoreProperty]
        public int Rating { get; set; }

        [FirestoreProperty]
        public int StDev { get; set; }

        [FirestoreProperty]
        public string PrimaryClubId { get; set; }

        [FirestoreProperty]
        public string State { get; set; }

        [FirestoreProperty]
        public string Country { get; set; }

        [FirestoreProperty]
        public string Gender { get; set; }

        [FirestoreProperty]
        public string TtaId { get; set; }

        [FirestoreProperty]
        public DateTime LastPlayed { get; set; }

        [FirestoreProperty]
        public int? LastEventId { get; set; }

        // from sndtta
        [FirestoreProperty]
        public List<string> Team { get; set; }
        [FirestoreProperty]
        public int Division { get; set; }
        [FirestoreProperty]
        public bool IsSndtta { get; set; }

     
        [FirestoreProperty]
        public DateTime LastUpdated { get; set; }

        // properties to push to firebase
        public DateTime? LastDeltaPushDate { get; set; }
        public bool RequireDeltaPush { get; set; }
    }
}
