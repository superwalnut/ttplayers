using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    public class PlayerHistoryEntry
    {
        public string EventId { get; set; }

        public DateTime EventDate { get; set; }

        public string EventName { get; set; }

        public int InitialMean { get; set; }

        public int InitialStDev { get; set; }

        public int PointChange { get; set; }

        public int FinalMean { get; set; }

        public int FinalStDev { get; set; }
    }
}
