using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    [FirestoreData]
    public class MatchScoreStats
    {
        [FirestoreProperty]
        public string Score { get; set; }

        [FirestoreProperty]
        public int Count { get; set; }

        [FirestoreProperty]
        public int TotalSets { get; set; } // determine if it is a 3 sets game, or 5 sets game, or 7 sets game.

        [FirestoreProperty]
        public bool IsWin { get; set; }
    }
}
