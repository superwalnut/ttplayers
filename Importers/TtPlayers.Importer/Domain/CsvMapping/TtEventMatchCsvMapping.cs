using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Domain.CsvMapping
{
    public class TtEventMatchCsvMapping: ClassMap<TtEventMatchEntry>
    {
        public TtEventMatchCsvMapping()
        {
            //WinnerID,LoserID,Score,WinnerDelta,WinnerOpponentMean,WinnerOpponentStDev,LoserDelta,LoserOpponentMean,LoserOpponentStDev,MatchesPairPlayed
            Map(m => m.WinnerID).Index(0);
            Map(m => m.LoserID).Index(1);
            Map(m => m.Score).Index(2);
            Map(m => m.WinnerDelta).Index(3);
            Map(m => m.WinnerOpponentMean).Index(4);
            Map(m => m.WinnerOpponentStDev).Index(5);
            Map(m => m.LoserDelta).Index(6);
            Map(m => m.LoserOpponentMean).Index(7);
            Map(m => m.LoserOpponentStDev).Index(8);
            Map(m => m.MatchesPairPlayed).Index(9);
        }
    }
}
