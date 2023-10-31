import { Timestamp } from 'firebase/firestore';
import { EventPlayer } from './event-player';

export interface TtEvent {
    Id:string;
    ClubId:string;
    ClubName:string;
    Country:string;
    Date:Timestamp;
    Director:string;
    LastUpdated: Timestamp;
    Name:string;
    PlayerRatings:EventPlayer[];
    State:string;
    SubmittedDate: Timestamp;
}
