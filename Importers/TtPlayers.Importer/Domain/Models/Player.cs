using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Google.Cloud.Firestore;
using TtPlayers.Importer.Domain.Attributes;
using TtPlayers.Importer.Extensions;

namespace TtPlayers.Importer.Domain.Models
{
    [BsonCollection("Players")]
    [FirebaseCollection("Players")]
    [FirestoreData]
    public class Player : IDocument
    {
        [BsonElement("_id")]
        [BsonId]
        [FirestoreProperty]
        public string? Id { get; set; } // this is the rating central ID

        [FirestoreProperty]
        public string? FullName { get; set; }
        [FirestoreProperty]
        public string FirstName { get; set; }
        [FirestoreProperty]
        public string LastName { get; set; }

        [FirestoreProperty]
        public List<string> Names {
            get
            {
                return this.GetNameComboTags();
            }
        }

        [FirestoreProperty]
        public int Rating { get; set; }

        [FirestoreProperty]
        public int StDev { get; set; }

        [FirestoreProperty]
        public string PrimaryClubId { get; set; }

        [FirestoreProperty]
        public string State { get; set; }

        [FirestoreProperty]
        public string Country { get; set; }

        [FirestoreProperty]
        public string Gender { get; set; }

        [FirestoreProperty]
        public string TtaId { get; set; }

        [FirestoreProperty]
        public DateTime LastPlayed { get; set; }

        [FirestoreProperty]
        public int? LastEventId { get; set; }

        // from sndtta
        [FirestoreProperty]
        public List<string> Team { get; set; }
        [FirestoreProperty]
        public int Division { get; set; }
        [FirestoreProperty]
        public bool IsSndtta { get; set; }


        // summary
        [FirestoreProperty]
        public int PlayedMatchesLast6Mth { get; set; }
        [FirestoreProperty]
        public int PlayedEventsLast6Mth { get; set; }

        [FirestoreProperty]
        public int MatchWinsLast6Mth { get; set; }


        [FirestoreProperty]
        public int TotalPlayedEvents { get; set; }

        [FirestoreProperty]
        public int TotalPlayedMatches { get; set; }

        [FirestoreProperty]
        public int YearToDateWins { get; set; }

        [FirestoreProperty]
        public int YearToDateLoses { get; set; }

        [FirestoreProperty]
        public int TotalWins { get; set; }
        [FirestoreProperty]
        public int TotalLoses { get; set; }

        [FirestoreProperty]
        public double WinRateFirstGame { get; set; }

        [FirestoreProperty]
        public double WinRateSecondGame { get; set; }

        [FirestoreProperty]
        public double WinRateThirdGame { get; set;}

        [FirestoreProperty]
        public double WinRateFourthGame { get;set; }

        [FirestoreProperty]
        public double WinRateFifthGame { get; set;}

        [FirestoreProperty]
        public int TotalBeatHigherRatingPlayers { get; set; }

        [FirestoreProperty]
        public int TotalLostLowerRatingPlayers { get; set; }

        [FirestoreProperty]
        public int TotalBeatPlayersCount { get; set; } // total beat distinct players

        [FirestoreProperty]
        public int TotalWinsWithoutLosingAnySet { get; set; }

        [FirestoreProperty]
        public string? LastPlayedEvent { get; set; }
        
        [FirestoreProperty]
        public int? LastPlayedEventRatingChange { get; set; }

        [FirestoreProperty]
        public DateTime? StartPlayingDate { get; set; }

        [FirestoreProperty]
        public int TotalOpponentCount { get; set; } // total distinct opponents


        //Ranking

        [FirestoreProperty]
        public int NationalGenderRanking { get; set; }

        [FirestoreProperty]
        public int StateGenderRanking { get; set; }


        // Recent Rating Changes
        [FirestoreProperty]
        public int RatingChangesMonthly { get; set; }

        [FirestoreProperty]
        public int RatingChangesQuarterly { get; set; }

        [FirestoreProperty]
        public int RatingChangesLast6Mth { get; set; }

        [FirestoreProperty]
        public int RatingChangesYearly { get; set; }

        [FirestoreProperty] 
        public int HighestRating { get; set; }

        [FirestoreProperty] 
        public int HighestRatingStDev { get; set; }

        [FirestoreProperty]
        public bool IsJunior { get; set; }

        [FirestoreProperty]
        public DateTime LastUpdated { get; set; }

        // properties to push to firebase
        public DateTime? LastDeltaPushDate { get; set; }
        public bool RequireDeltaPush { get; set; }
    }
}
