import { Timestamp } from 'firebase/firestore';

export interface TtEvent {
    Id:string;
    ClubId:string;
    ClubName:string;
    Country:string;
    Date:Timestamp;
    Director:string;
    LastUpdated: Timestamp;
    Name:string;
    PlayerCount:number;
    MatchCount:number;
    State:string;
    SubmittedDate: Timestamp;
}
