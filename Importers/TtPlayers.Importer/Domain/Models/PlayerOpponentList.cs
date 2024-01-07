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
    [BsonCollection("PlayerOpponents")]
    [FirebaseCollection("PlayerOpponents")]
    [FirestoreData]
    public class PlayerOpponentList : IDocument
    {
        public PlayerOpponentList()
        {
            Opponents = new List<PlayerOpponent>();
        }

        [BsonElement("_id")]
        [BsonId]
        [FirestoreProperty] 
        public string? Id { get; set; }

        [FirestoreProperty]
        public string? FullName { get; set; }

        [FirestoreProperty] 
        public List<PlayerOpponent> Opponents { get; set;}

        [FirestoreProperty]
        public DateTime LastUpdated { get; set; }

        // properties to push to firebase
        public DateTime? LastDeltaPushDate { get; set; }
        public bool RequireDeltaPush { get; set; }
    }
}
