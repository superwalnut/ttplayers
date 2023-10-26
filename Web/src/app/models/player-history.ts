export interface PlayerHistory {
    Id:string;
    History:PlayerHistoryEntry[];
}

export interface PlayerHistoryEntry {
    EventDate: Date;
    EventId:string;
    EventName:string;
    FinalMean:number;
    FinalStDev:number;
    InitialMean:number;
    InitialStDev:number;
    PointChange:number;
}