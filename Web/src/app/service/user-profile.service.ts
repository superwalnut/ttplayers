import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private firestore: AngularFirestore) { }

  saveProfile(uid:string, userPlayerId:string) : Promise<void>{
    const profile = {} as Profile;

    const ref = this.firestore.collection('Profiles').doc(uid);
    const result = ref.set(profile, {merge: true});
    return result;
  }

}
