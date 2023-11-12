import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable, map, of, take } from 'rxjs';
import { Player } from '../models/player';
import { PlayerHistory } from '../models/player-history';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private firestore: AngularFirestore) { }

  searchPlayerByName(searchTerm: string, state:string, pageSize:number): Observable<Player[]> {
    if(state){
      return this.firestore.collection<Player>('Players', ref =>
        ref
        .where('State', '==', state)
        .where('Names', 'array-contains', searchTerm.toLowerCase())
        .orderBy('Id', 'asc')
        .limit(pageSize)
      ).valueChanges().pipe(take(1));
    } else {
      return this.firestore.collection<Player>('Players', ref =>
        ref
        .where('Names', 'array-contains', searchTerm.toLowerCase())
        .orderBy('Id', 'asc')
        .limit(pageSize)
      ).valueChanges().pipe(take(1));
    }
  }

  searchPlayerByNameWithPaging(searchTerm: string, state:string, pageSize:number, lastPlayer:Player): Observable<Player[]> {
    if(state){
      return this.firestore.collection<Player>('Players', ref =>
        ref
        .where('State', '==', state)
        .where('Names', 'array-contains', searchTerm.toLowerCase())
        .orderBy('Id', 'asc')
        .startAfter(lastPlayer.Id)
        .limit(pageSize)
      ).valueChanges().pipe(take(1));
    } else {
      return this.firestore.collection<Player>('Players', ref =>
        ref
        .where('Names', 'array-contains', searchTerm.toLowerCase())
        .orderBy('Id', 'asc')
        .startAfter(lastPlayer.Id)
        .limit(pageSize)
      ).valueChanges().pipe(take(1));
    }
  }

  searchPlayerByNameForAutocomplete(searchTerm: string): Observable<string[]> {
      return this.firestore.collection<Player>('Players', ref =>
        ref
        .where('Names', 'array-contains', searchTerm.toLowerCase())
        .orderBy('Id', 'asc')
        .limit(10)
      ).valueChanges().pipe(
        take(1), 
        map((players => {
          return players.map(p =>{
            return `${p.FullName} ${p.Rating}±${p.StDev} (ID:${p.Id})`;
          })
        })),
      );
  }

  getPlayer(id:string): Observable<Player> {
    return this.firestore.doc<Player>(`Players/${id}`).valueChanges();
  }

  getPlayerHistory(id:string): Observable<PlayerHistory>{
    return this.firestore.doc<PlayerHistory>(`PlayerHistories/${id}`).valueChanges();
  }

  getRankings(gender:string, state:string, pageSize:number) : Observable<Player[]>{
    console.log('gender', gender);
    console.log('state', state);
    if(state) {
      return this.firestore.collection<Player>('Players', ref =>
        ref.where('Gender', '==', gender)
        .where('State', '==', state)
        .where('StateGenderRanking', '>', 0)
        .orderBy('StateGenderRanking','asc')
        .orderBy('Id', 'asc')
        .limit(pageSize)
      ).valueChanges().pipe(take(1));
    }

    return this.firestore.collection<Player>('Players', ref =>
      ref.where('Gender', '==', gender)
      .where('NationalGenderRanking', '>', 0)
      .orderBy('NationalGenderRanking','asc')
      .orderBy('Id', 'asc')
      .limit(pageSize)
    ).valueChanges().pipe(take(1));
  }

  getRankingsWithPaging(gender:string, state:string, pageSize:number, lastDoc:Player) : Observable<Player[]> {
    if(!lastDoc)
    {
      return of();
    }
    if(state) {
      return this.firestore.collection<Player>('Players', ref =>
        ref.where('Gender', '==', gender)
        .where('State', '==', state)
        .where('StateGenderRanking', '>', 0)
        .orderBy('StateGenderRanking','asc')
        .orderBy('Id', 'asc')
        .startAfter(lastDoc.StateGenderRanking, lastDoc.Id)
        .limit(pageSize)
      ).valueChanges().pipe(take(1));
    }

    return this.firestore.collection<Player>('Players', ref =>
      ref.where('Gender', '==', gender)
      .where('NationalGenderRanking', '>', 0)
      .orderBy('NationalGenderRanking','asc')
      .orderBy('Id', 'asc')
      .startAfter(lastDoc.NationalGenderRanking, lastDoc.Id)
      .limit(pageSize)
    ).valueChanges().pipe(take(1));
  }
}
