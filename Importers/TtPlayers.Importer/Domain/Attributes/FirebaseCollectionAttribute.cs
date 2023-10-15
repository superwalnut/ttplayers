using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Attributes
{
    public class FirebaseCollectionAttribute : Attribute
    {
        public string CollectionName { get; }

        public FirebaseCollectionAttribute(string collectionName)
        {
            CollectionName = collectionName;
        }
    }
}
