using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Domain.CsvMapping
{
    public class PlayerHistoryCsvMapping: ClassMap<PlayerHistoryEntry>
    {
        public PlayerHistoryCsvMapping()
        {
            //EventID,EventDate,EventName,InitialMean,InitialStDev,PointChange,FinalMean,FinalStDev
            Map(m => m.EventId).Index(0);
            Map(m => m.EventDate).Index(1);
            Map(m => m.EventName).Index(2);
            Map(m => m.InitialMean).Index(3);
            Map(m => m.InitialStDev).Index(4);
            Map(m => m.PointChange).Index(5);
            Map(m => m.FinalMean).Index(6);
            Map(m => m.FinalStDev).Index(7);
        }
    }
}
