import { Timestamp } from 'firebase/firestore';

export interface Player {
    Id: string;
    FullName: string;
    FirstName: string;
    LastName: string;
    Names:string[];
    Rating: number;
    StDev: number;
    PrimaryClubId: string;
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

    IsJunior:boolean;

    LastUpdated: Date;
    LastDeltaPushDate: Date | null;
    RequireDeltaPush: boolean;
  }