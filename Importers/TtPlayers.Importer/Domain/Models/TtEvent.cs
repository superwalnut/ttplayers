using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    [BsonCollection("Events")]
    public class TtEvent : IDocument
    {
        public TtEvent()
        {
            PlayerRatings = new List<TtEventPlayerRatingChange> { };
        }

        [BsonElement("_id")]
        [BsonId]
        public string? Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }

        public string ClubId { get; set; }
        public string ClubName { get; set; }

        public List<TtEventPlayerRatingChange> PlayerRatings { get; set; }
    }
}
