import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, map, take, of } from 'rxjs';
import { Match } from './../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private firestore: AngularFirestore) { }

  searchMatches(id:string) : Observable<Match[]>{
    return this.firestore.collection<Match>('Matches', ref =>
      ref.where('PlayerIds', 'array-contains', id)
      .orderBy('MatchDate', 'desc')
      .orderBy('Id', 'asc')
      .limit(20)
    ).valueChanges();
  }

  searchMatchesWithPaging(id: string, lastDoc:Match): Observable<Match[]> {
    console.log('last doc', lastDoc);
    if(!lastDoc)
    {
      return of();
    }

    return this.firestore.collection<Match>('Matches', ref =>
      ref.where('PlayerIds', 'array-contains', id)
      .orderBy('MatchDate', 'desc')
      .orderBy('Id', 'asc')
      .startAfter(lastDoc.MatchDate, lastDoc.Id)
      .limit(10)
    ).valueChanges().pipe();
  }
}
