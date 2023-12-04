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
    Suburb:string;
    Postcode:string;
    Grip:string;
    RubberType:string;
    PhotoUrl:string;
    IsCompleted:boolean;
    LastUpdated:Date;
}
