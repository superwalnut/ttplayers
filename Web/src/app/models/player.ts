export interface Player {
    _id: string;
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
    LastEventId: number;
    Team: string | null;
    Division: number;
    IsSndtta: boolean;
    LastUpdated: Date;
    LastDeltaPushDate: Date | null;
    RequireDeltaPush: boolean;
  }