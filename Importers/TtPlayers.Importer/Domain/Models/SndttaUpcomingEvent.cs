using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    [BsonCollection("SndttaUpcomingEvent")]
    public class SndttaUpcomingEvent : IDocument
    {
        [BsonElement("_id")]
        [BsonId]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public int Round { get; set; }

        public string Date { get; set; }

        public string? Time { get; set; }

        public string Division { get; set; }

        public string HomeTeamName { get; set; }

        public string AwayTeamName { get; set; }

        public string Location { get; set; }
    }
}
