import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Profile } from '../models/profile';
import { Observable, of } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { GlobalConstants } from './global.constants';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private firestore: AngularFirestore, private lsService:LocalstorageService) { }

  saveProfile(uid:string, profile:Profile) : Promise<void>{
    const ref = this.firestore.collection('Profiles').doc(uid);
    const result = ref.set(profile, {merge: true});

    //update local storage
    this.lsService.setItemWithExpiration(GlobalConstants.USER_PROFILE, profile, 10000);
    return result;
  }

  getProfile(uid:string): Observable<Profile> {
    const val = this.lsService.getItemWithExpiration(GlobalConstants.USER_PROFILE);
    if(val){
      const profile = val as Profile;
      console.log('ls profile', profile);
      return of(profile);
    } else {
      console.log('calling db for stats');
      return this.firestore.doc<Profile>(`Profiles/${uid}`).valueChanges();
    }
  }
}
