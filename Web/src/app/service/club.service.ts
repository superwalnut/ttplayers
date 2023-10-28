import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Club } from './../models/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private firestore: AngularFirestore) { }

  getClub(id:string): Observable<Club> {
    return this.firestore.doc<Club>(`Clubs/${id}`).valueChanges();
  }
}
