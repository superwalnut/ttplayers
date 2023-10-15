using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    [FirestoreData]
    public class PlayerHistoryEntry
    {
        [FirestoreProperty]
        public string EventId { get; set; }

        [FirestoreProperty]
        public DateTime EventDate { get; set; }

        [FirestoreProperty]
        public string EventName { get; set; }

        [FirestoreProperty]
        public int InitialMean { get; set; }

        [FirestoreProperty]
        public int InitialStDev { get; set; }

        [FirestoreProperty]
        public int PointChange { get; set; }

        [FirestoreProperty]
        public int FinalMean { get; set; }

        [FirestoreProperty]
        public int FinalStDev { get; set; }
    }
}
