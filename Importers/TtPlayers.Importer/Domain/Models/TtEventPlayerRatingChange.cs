using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    public class TtEventPlayerRatingChange
    {
        public string PlayerId { get; set; }

        public string PlayerName { get; set; }
        
        public string InitialRating { get; set; }

        public string PointChange { get; set; }

        public string FinalRating { get; set; }
    }
}
