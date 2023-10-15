using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Extensions;

namespace TtPlayers.Importer.Domain.Models
{
    [FirestoreData]
    public class TtEventMatchEntry
    {
        //WinnerID,LoserID,Score,WinnerDelta,WinnerOpponentMean,WinnerOpponentStDev,LoserDelta,LoserOpponentMean,LoserOpponentStDev,MatchesPairPlayed
        [FirestoreProperty]
        public string WinnerID { get; set; }
        [FirestoreProperty]
        public string LoserID { get; set; }
        [FirestoreProperty]
        public string Score { get; set; }
        [FirestoreProperty]
        public string WinnerDelta { get; set; }
        [FirestoreProperty]
        public string WinnerOpponentMean { get; set; }
        [FirestoreProperty]
        public string WinnerOpponentStDev { get; set; }
        [FirestoreProperty]
        public string LoserDelta { get; set; }
        [FirestoreProperty]
        public string LoserOpponentMean { get; set; }
        [FirestoreProperty]
        public string LoserOpponentStDev { get; set; }
        [FirestoreProperty]
        public string MatchesPairPlayed { get; set; }

        [FirestoreProperty]
        public List<string> WinnerScore
        {
            get
            {
                return Score.ToWinnerScores();
            }
        }

        [FirestoreProperty]
        public List<string> LoserScore
        {
            get
            {
                return Score.ToLoserScores();
            }
        }
    }
}
