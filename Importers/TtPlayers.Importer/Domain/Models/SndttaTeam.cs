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
    [BsonCollection("SndttaTeam")]
    [FirebaseCollection("SndttaTeam")]
    [FirestoreData]
    public class SndttaTeam : IDocument
    {
        public SndttaTeam()
        {
            Players = new List<Player>();
        }

        [BsonElement("_id")]
        [BsonId]
        [FirestoreProperty]
        public string Id { get;set; }

        [FirestoreProperty]
        public string? ShortName { get; set; }

        [FirestoreProperty]
        public List<Player> Players { get; set; }

        [FirestoreProperty]
        public DateTime LastUpdated { get; set; }
    }
}
