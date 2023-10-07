using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    public class BsonCollectionAttribute : Attribute
    {
        public string CollectionName { get; }

        public BsonCollectionAttribute(string collectionName)
        {
            CollectionName = collectionName;
        }
    }
}
