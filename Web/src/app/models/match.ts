import { Timestamp } from 'firebase/firestore';

export interface Match {
    EventId:string;
    EventName:string;
    Id:string;
    LastUpdated:Timestamp;
    LoserDelta:number;
    LoserId:string;
    LoserName:string;
    LoserOpponentMean:number;
    LoserOpponentStDev:number;
    MatchDate:Timestamp;
    MatchesPairPlayed:number;
    Score:string;
    WinnerDelta:number;
    WinnerId:string;
    WinnerName:string;
    WinnerOpponentMean:number;
    WinnerOpponentStDev:number;

    WinnerSetWins:number;
    WinnerSetScores:number[];
    LoserSetWins:number;
    LoserSetScores:number[];
}