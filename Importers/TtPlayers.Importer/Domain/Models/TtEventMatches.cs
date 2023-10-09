using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    [BsonCollection("EventMatches")]
    public class TtEventMatches : IDocument
    {
        [BsonElement("_id")]
        [BsonId]
        public string? Id { get; set; }

        public List<TtEventMatch> Matches { get; set; }
    }
}
