import { Timestamp } from 'firebase/firestore';

export interface FriendRating {
    PlayerId:string;
    Rating:number;
    StDev:number;
    LastPlayed: Timestamp;
    LastPlayedEvent:string;

    TotalPlayedEvents:number;
    TotalPlayedMatches:number;
    TotalWins:number;
    TotalLoses:number;

    YearToDateWins:number;
    YearToDateLoses:number;

    StartPlayingDate:Timestamp;
}