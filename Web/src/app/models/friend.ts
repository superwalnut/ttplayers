import { Timestamp } from 'firebase/firestore';

export interface Friend {
    Id:string;
    UserId:string;
    FriendPlayerId: string;
    FullName: string;
    FirstName: string;
    LastName: string;
    State: string;
    Gender: string;
}
