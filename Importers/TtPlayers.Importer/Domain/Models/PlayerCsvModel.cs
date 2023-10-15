using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    public class PlayerCsvModel
    {
        //"Wang, Wei Kevin",97311,1224,129,1255,,,NSW,,AUS,,M,1,0,33026,2023-10-06,48371,N,0
        public string? Id { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        public int StDev { get; set; }
        public string PrimaryClubId { get; set; }
        public string City { get; set; } // not used
        public string State { get; set; } // not used
        public string Province { get; set; }
        public string PostalCode { get; set; } // not used
        public string Country { get; set; }
        public string Deceased { get; set; } // not used
        public string Sex { get; set; }
        public string Sport { get; set; } // not used
        public string USATT_ID { get; set; } // not used
        public string TTA_ID { get; set; } 
        public DateTime LastPlayed { get; set; }
        public int? LastEventId { get; set; }
        public string ITTF { get; set; } // not used
        public string ITTF_ID { get; set; } // not used
    }
}
