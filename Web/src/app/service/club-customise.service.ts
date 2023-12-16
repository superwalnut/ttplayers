import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ClubSetup } from './../models/club-setup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubCustomiseService {

  constructor(private firestore: AngularFirestore) { }

  getClubSetup(id:string): Observable<ClubSetup> {
    return this.firestore.doc<ClubSetup>(`ClubSetups/${id}`).valueChanges();
  }

  async saveClubSetup(club:ClubSetup) : Promise<void>{
      const ref = this.firestore.collection('ClubSetups').doc(club.Id);
      const result = ref.set(club, {merge: true});
      return result;
  }



}
