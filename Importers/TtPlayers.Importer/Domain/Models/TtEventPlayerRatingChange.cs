using Google.Cloud.Firestore;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    [FirestoreData]
    public class TtEventPlayerRatingChange
    {
        //PlayerID,PlayerName,PlayerCountry,InitialMean,InitialStDev,PointChange,FinalMean,FinalStDev
        [FirestoreProperty]
        public string PlayerId { get; set; }

        [FirestoreProperty]
        public string PlayerName { get; set; }

        [FirestoreProperty]
        public int InitialMean { get; set; }

        [FirestoreProperty]
        public int InitialStDev { get; set; }

        [FirestoreProperty]
        public int PointChange { get; set; }

        [FirestoreProperty]
        public int FinalMean { get; set; }

        [FirestoreProperty]
        public int FinalStDev { get; set; }
    }
}
