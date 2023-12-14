import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserClub } from '../models/user-club';
import { Observable, of } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { GlobalConstants } from './global.constants';

@Injectable({
  providedIn: 'root'
})
export class UserClubService {

  constructor(private firestore: AngularFirestore, private lsService:LocalstorageService) { }

  saveUserClub(uid:string, userClub:UserClub) : Promise<void>{
    const uniqueId = `${uid}-${userClub.ClubId}`;
    
    userClub.Id = uniqueId;
    userClub.UserId = uid;

    const ref = this.firestore.collection('UserClubs').doc(uniqueId);
    const result = ref.set(userClub, {merge: true});

    //update local storage
    //this.lsService.setItemWithExpiration(GlobalConstants.USER_PROFILE, userClub, 10000);
    return result;
  }

  getUserClubs(uid:string) : Observable<UserClub[]> {
    return this.firestore.collection<UserClub>('UserClubs', ref => 
        ref
        .where('UserId', '==', uid)
      ).valueChanges();
  }

}
