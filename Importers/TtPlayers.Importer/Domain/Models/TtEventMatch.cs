using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Extensions;

namespace TtPlayers.Importer.Domain.Models
{
    public class TtEventMatch
    {
        //WinnerID,LoserID,Score,WinnerDelta,WinnerOpponentMean,WinnerOpponentStDev,LoserDelta,LoserOpponentMean,LoserOpponentStDev,MatchesPairPlayed
        public string WinnerID { get; set; }
        public string LoserID { get; set; }
        public string Score { get; set; }
        public string WinnerDelta { get; set; }
        public string WinnerOpponentMean { get; set; }
        public string WinnerOpponentStDev { get; set; }
        public string LoserDelta { get; set; }
        public string LoserOpponentMean { get; set; }
        public string LoserOpponentStDev { get; set; }
        public string MatchesPairPlayed { get; set; }

        public List<string> WinnerScore
        {
            get
            {
                return Score.ToWinnerScores();
            }
        }

        public List<string> LoserScore
        {
            get
            {
                return Score.ToLoserScores();
            }
        }
    }
}
