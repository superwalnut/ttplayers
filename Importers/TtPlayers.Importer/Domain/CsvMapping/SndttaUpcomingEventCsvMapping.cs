using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Domain.CsvMapping
{
    public class SndttaUpcomingEventCsvMapping : ClassMap<SndttaUpcomingEvent>
    {
        public SndttaUpcomingEventCsvMapping()
        {
            //Round,Day,Date,Time,Age Grp,Division,Blank1,Home Team,Vs.,Away Team,Blank2,Location, 

            Map(m => m.Round).Index(0);
            Map(m => m.Date).Index(2);
            Map(m => m.Time).Index(3);
            Map(m => m.Division).Index(5);
            Map(m => m.HomeTeamName).Index(7);
            Map(m => m.AwayTeamName).Index(9);
            Map(m => m.Location).Index(11);
        }
    }
}
