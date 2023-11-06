import { Timestamp } from 'firebase/firestore';
import { EventPlayerRating } from './event-player-rating';
export interface EventPlayer {

    Id:string;
    EventDate:Timestamp;
    LastUpdated:Timestamp;
    Players:EventPlayerRating[];
}