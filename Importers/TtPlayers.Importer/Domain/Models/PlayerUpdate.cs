using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.Attributes;

namespace TtPlayers.Importer.Domain.Models
{
    [BsonCollection("Players")]
    public class PlayerUpdate : IDocument
    {
        [BsonElement("_id")]
        [BsonId]
        public string Id { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
