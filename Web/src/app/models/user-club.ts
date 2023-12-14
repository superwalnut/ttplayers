import { Timestamp } from 'firebase/firestore';

export interface UserClub {
    Id:string;
    UserId:string;
    ClubId: string;
    Name:string;
    Nickname:string;
    LastUpdated:Date;
    City:string;
    State:string;
}
