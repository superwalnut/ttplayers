using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    [BsonCollection("Players")]
    public class Player : IDocument
    {
        [BsonId(IdGenerator = typeof(StringObjectIdGenerator))]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string PlayerId { get; set; }
        public string Name { get; set; }
        public string Team { get; set; }
        public int Division { get; set; }
    }
}
