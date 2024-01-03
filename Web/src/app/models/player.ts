import { Timestamp } from 'firebase/firestore';
import { MatchScoreStats } from './match-score-stats';

export interface Player {
    Id: string;
    FullName: string;
    FirstName: string;
    LastName: string;
    Names:string[];
    Rating: number;
    StDev: number;
    
    PrimaryClubId: string;
    ClubIds:string[];

    State: string;
    Country: string;
    Gender: string;
    TtaId: string;
    LastPlayed: Timestamp;
    Team: string[] | null;
    Division: number;
    IsSndtta: boolean;

    PlayedEventsLast6Mth:number;
    PlayedMatchesLast6Mth:number;
    RatingChangesLast6Mth:number;
    MatchWinsLast6Mth:number;

    RatingChangesMonthly:number;
    RatingChangesQuarterly:number;
    RatingChangesYearly:number;

    TotalPlayedEvents:number;
    TotalPlayedMatches:number;
    TotalWins:number;
    TotalLoses:number;

    YearToDateWins:number;
    YearToDateLoses:number;

    WinRateFirstGame:number;
    WinRateSecondGame:number;
    WinRateThirdGame:number;
    WinRateFourthGame:number;
    WinRateFifthGame:number;

    TotalBeatHigherRatingPlayers:number;
    TotalLostLowerRatingPlayers:number;
    TotalWinsWithoutLosingAnySet:number;

    LastEventId: number;
    LastPlayedEvent:string;
    LastPlayedEventRatingChange:number;

    StartPlayingDate:Timestamp;

    TotalOpponentCount:number;
    TotalBeatPlayersCount:number;

    NationalGenderRanking:number;
    StateGenderRanking:number;

    MatchScoreStats:MatchScoreStats[];

    IsJunior:boolean;

    LastUpdated: Date;
    LastDeltaPushDate: Date | null;
    RequireDeltaPush: boolean;
  }