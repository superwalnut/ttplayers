import { Timestamp } from 'firebase/firestore';

export interface Profile {
    UserId:string;
    PlayerId: string;
    FullName: string;
    FirstName: string;
    LastName: string;
    Email:string;
    Phone:string;
    State: string;
    Gender: string;
    BornYear:number;
    Postcode:string;
    Grip:string;
    PhotoUrl:string;
}
