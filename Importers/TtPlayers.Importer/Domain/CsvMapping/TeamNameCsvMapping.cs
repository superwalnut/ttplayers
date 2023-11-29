using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Domain.CsvMapping
{
    public class TeamNameCsvMapping: ClassMap<TeamNameCsvModel>
    {
        public TeamNameCsvMapping()
        {
            Map(m => m.Name).Index(0);
            Map(m => m.ShortName).Index(1);
            Map(m => m.ClubId).Index(2);
        }
    }
}
