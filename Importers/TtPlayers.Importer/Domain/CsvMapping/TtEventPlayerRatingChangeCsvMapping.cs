using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Domain.CsvMapping
{
    public class TtEventPlayerRatingChangeCsvMapping : ClassMap<TtEventPlayerRatingChange>
    {
        public TtEventPlayerRatingChangeCsvMapping()
        {
            //PlayerID,PlayerName,PlayerCountry,InitialMean,InitialStDev,PointChange,FinalMean,FinalStDev
            Map(m => m.PlayerId).Index(0);
            Map(m => m.PlayerName).Index(1);
            Map(m => m.InitialMean).Index(3);
            Map(m => m.InitialStDev).Index(4);
            Map(m => m.PointChange).Index(5);
            Map(m => m.FinalMean).Index(6);
            Map(m => m.FinalStDev).Index(7);
        }
    }
}
