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
    [BsonCollection("EventMatches")]
    [FirebaseCollection("EventMatches")]
    [FirestoreData]
    public class TtEventMatches : IDocument
    {
        [BsonElement("_id")]
        [BsonId]
        [FirestoreProperty]
        public string? Id { get; set; }

        [FirestoreProperty]
        public List<TtEventMatchEntry> Matches { get; set; }

        [FirestoreProperty]
        public DateTime LastUpdated { get; set; }

        // properties to push to firebase
        public DateTime? LastDeltaPushDate { get; set; }
        public bool RequireDeltaPush { get; set; }

        // transformed

        public bool RequireTransform { get; set; }

    }
}
