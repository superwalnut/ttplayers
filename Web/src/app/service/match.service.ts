import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Match } from './../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private firestore: AngularFirestore) { }

  searchMatches(id: string): Observable<Match[]> {
    return this.firestore.collection<Match>('Matches', ref =>
      ref.where('PlayerIds', 'array-contains', id)
      .orderBy('MatchDate', 'desc')
      .limit(20)
    ).valueChanges();
  }
}
