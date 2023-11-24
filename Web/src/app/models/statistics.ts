import { Timestamp } from "firebase/firestore";

export interface Statistics {
    Id:string;
    CreatedDate:Timestamp;

    TotalPlayerCount:number;    
    StatePlayerCounts:StateCounter;

    TotalMenPlayerCount:number;
    StateMenPlayerCounts:StateCounter;

    TotalWomenPlayerCount:number;
    StateWomenPlayerCounts:StateCounter;

    TotalEventCount:number;
    StateEventCounts:StateCounter;

    TotalMatchCount:number;
    StateMatchCounts:StateCounter;

    ActivePlayerCount:number;
    StateActivePlayerCounts:StateCounter;

    TotalClubCount:number;
    StateClubCounts:StateCounter;

    AverageWinRate:number;
    StateAverageRates:StateCounter;

    MatchPlayedGroups: any;
}

export interface StateCounter {
    ACT:number;
    NSW:number;
    VIC:number;
    WA:number;
    QLD:number;
    TAS:number;
    SA:number;
    NT:number;
}