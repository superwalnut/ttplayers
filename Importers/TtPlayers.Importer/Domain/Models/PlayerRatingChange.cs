using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    [FirestoreData]
    public class PlayerRatingChange
    {
        [FirestoreProperty]
        public int Rating { get; set; }

        [FirestoreProperty]
        public string Period { get; set; }
    }
}
