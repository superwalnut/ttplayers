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
    LastPlayed: Date;
    Team: string | null;
    Division: number;
    IsSndtta: boolean;

    PlayedEventsLast6Mth:number;
    PlayedMatchesLast6Mth:number;
    RatingChangesLast6Mth:number;

    TotalPlayedEvents:number;
    TotalPlayedMatches:number;
    TotalWins:number;
    TotalLoses:number;

    WinRateFirstGame:number;
    WinRateSecondGame:number;
    WinRateThirdGame:number;
    WinRateFourthGame:number;
    WinRateFifthGame:number;

    TotalBeatHigherRatingPlayers:number;
    TotalLostLowerRatingPlayers:number;

    LastEventId: number;
    LastPlayedEvent:string;
    LastPlayedEventRatingChange:number;

    StartPlayingDate:Date;

    TotalOpponentCount:number;
    NationalRanking:number;
    NationalGenderRanking:number;
    StateRanking:number;
    StateGenderRanking:number;

    IsJunior:boolean;

    LastUpdated: Date;
    LastDeltaPushDate: Date | null;
    RequireDeltaPush: boolean;
  }