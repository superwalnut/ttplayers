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
    [BsonCollection("Clubs")]
    [FirebaseCollection("Clubs")]
    [FirestoreData]
    public class Club : IDocument
    {
        //Name,ID,Nickname,Address1,Address2,City,State,Province,PostalCode,Country,Email,Website,Phone,Sport,Status

        [BsonElement("_id")]
        [BsonId]
        [FirestoreProperty]
        public string? Id { get; set; }

        [FirestoreProperty]
        public string Name { get; set; }

        [FirestoreProperty]
        public string Nickname { get; set; }

        [FirestoreProperty]
        public string Address1 { get; set; }

        [FirestoreProperty]
        public string Address2 { get; set; }

        [FirestoreProperty]
        public string City { get; set; }

        [FirestoreProperty]
        public string State { get; set; }

        [FirestoreProperty]
        public string Country { get; set; }

        [FirestoreProperty]
        public string PostalCode { get; set; }

        [FirestoreProperty]
        public string Email { get; set; }

        [FirestoreProperty]
        public string Website { get; set; }

        [FirestoreProperty]
        public string Phone { get; set; }

        [FirestoreProperty]
        public string Status { get; set; }

        [FirestoreProperty]
        public List<string> Tags { get; set; }

        [FirestoreProperty]
        public DateTime LastUpdated { get; set; }

        // properties to push to firebase
        public DateTime? LastDeltaPushDate { get; set; }
        public bool RequireDeltaPush { get; set; }

    }
}
