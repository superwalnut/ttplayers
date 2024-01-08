import { Timestamp } from 'firebase/firestore';

export interface PlayerOpponents {
    Id:string;
    FullName:string;
    Opponents:PlayerOpponent[];
}

export interface PlayerOpponent {
    Id:string;
    FullName:string;
    Matches:PlayerOpponentMatch[];
}

export interface PlayerOpponentMatch{
    Id:string;
    MatchDate:Timestamp;
    WinnerId:string;
    LoserId:string;
    WinnerSetWins:number;
    WinnerSetScores:number[];
    LoserSetWins:number;
    LoserSetScores:number[];
    
}