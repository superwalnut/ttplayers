using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Domain.Models
{
    [FirestoreData]
    public class SndttaTeamPlayer
    {
        [FirestoreProperty]
        public string? Id { get; set; } // this is the rating central ID

        [FirestoreProperty]
        public string? FullName { get; set; }
        [FirestoreProperty]
        public string FirstName { get; set; }
        [FirestoreProperty]
        public string LastName { get; set; }

        [FirestoreProperty]
        public int Rating { get; set; }

        [FirestoreProperty]
        public int StDev { get; set; }

        [FirestoreProperty]
        public string PrimaryClubId { get; set; }

        [FirestoreProperty]
        public string State { get; set; }

        [FirestoreProperty]
        public string Gender { get; set; }

        [FirestoreProperty]
        public string TtaId { get; set; }

        [FirestoreProperty]
        public DateTime LastPlayed { get; set; }

        [FirestoreProperty]
        public int? LastEventId { get; set; }

        [FirestoreProperty]
        public int Division { get; set; }

    }
}
