import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private firestore: AngularFirestore) { }

  saveProfile(uid:string, profile:Profile) : Promise<void>{

    const ref = this.firestore.collection('Profiles').doc(uid);
    const result = ref.set(profile, {merge: true});
    return result;
  }

  getProfile(uid:string): Observable<Profile> {
    return this.firestore.doc<Profile>(`Profiles/${uid}`).valueChanges();
  }
}
