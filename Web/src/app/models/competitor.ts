import { Timestamp } from 'firebase/firestore';

export interface Competitor {
    Id:string;  // UserId + CompetitorPlayerId
    UserId:string;
    CompetitorPlayerId: string;
    FullName: string;
    FirstName: string;
    LastName: string;
    State: string;
    Gender: string;
}
