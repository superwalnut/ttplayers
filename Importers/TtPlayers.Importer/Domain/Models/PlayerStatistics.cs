using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    public class PlayerStatistics
    {
        public int TotalCount { get; set; }

        public Dictionary<string, int> StateCounts { get; set; }


    }
}
