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
        [BsonElement("_id")]
        [BsonId]
        public string? Id { get; set; } // this is the rating central ID
        
        public string? FullName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Rating { get; set; }
        public DateTime LastPlayed { get; set; }

        // from sndtta
        public List<string> Team { get; set; }
        public int Division { get; set; }
        public bool IsSndtta { get; set; }

        //extra from RC player info page
        public string Gender { get; set; }
        public string State { get; set; }
        public string TTAustraliaId { get; set; }

    }
}
