export interface Statistics {
    Id:string;
    TotalPlayerCount:number;
    StatePlayerCounts:StateCounter;
    TotalEventCount:number;
    StateEventCounts:StateCounter;
    TotalMatchCount:number;
    StateMatchCounts:StateCounter;
    ActivePlayerCount:number;
    StateActivePlayerCounts:StateCounter;
    TotalClubCount:number;
    StateClubCounts:StateCounter;
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