import { Timestamp } from 'firebase/firestore';

export interface Profile {
    UserId:string;
    PlayerId: string;
    FullName: string;
    FirstName: string;
    LastName: string;
    State: string;
    Gender: string;
}
