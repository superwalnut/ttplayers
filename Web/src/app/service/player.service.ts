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
      ).valueChanges();
    } else {
      return this.firestore.collection<Player>('Players', ref =>
        ref
        .where('Names', 'array-contains', searchTerm.toLowerCase())
        .orderBy('Id', 'asc')
        .limit(pageSize)
      ).valueChanges();
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
      ).valueChanges();
    } else {
      return this.firestore.collection<Player>('Players', ref =>
        ref
        .where('Names', 'array-contains', searchTerm.toLowerCase())
        .orderBy('Id', 'asc')
        .startAfter(lastPlayer.Id)
        .limit(pageSize)
      ).valueChanges();
    }
  }

  searchPlayerByNameForAutocomplete(searchTerm: string): Observable<any[]> {
      return this.firestore.collection<Player>('Players', ref =>
        ref
        .where('Names', 'array-contains', searchTerm.toLowerCase())
        .orderBy('Id', 'asc')
        .limit(10)
      ).valueChanges();
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
      ).valueChanges();
    }

    return this.firestore.collection<Player>('Players', ref =>
      ref.where('Gender', '==', gender)
      .where('NationalGenderRanking', '>', 0)
      .orderBy('NationalGenderRanking','asc')
      .orderBy('Id', 'asc')
      .limit(pageSize)
    ).valueChanges();
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
      ).valueChanges();
    }

    return this.firestore.collection<Player>('Players', ref =>
      ref.where('Gender', '==', gender)
      .where('NationalGenderRanking', '>', 0)
      .orderBy('NationalGenderRanking','asc')
      .orderBy('Id', 'asc')
      .startAfter(lastDoc.NationalGenderRanking, lastDoc.Id)
      .limit(pageSize)
    ).valueChanges();
  }

  getPlayerByPlayerIdList(playerIds:string[]) : Observable<Player[]>{
    const batches = this.createBatch(playerIds, 30);

    const queries = batches.map(batch => {
      return this.firestore.collection<Player>('Players', ref =>
        ref.where('Id', 'in', batch)
      ).valueChanges();
    });

    return this.combineObservables(playerIds, queries);
  }

  private createBatch(playerIds: string[], batchSize: number): string[][] {
    const batches: string[][] = [];
    for (let i = 0; i < playerIds.length; i += batchSize) {
      const batch = playerIds.slice(i, i + batchSize);
      batches.push(batch);
    }
    return batches;
  }

  private combineObservables(teams: string[], observables: Observable<Player[]>[]): Observable<Player[]> {
    return new Observable<Player[]>(subscriber => {
      const mergedResults: Player[] = [];
  
      const subscribeToQuery = (query: Observable<Player[]>) => {
        query.subscribe(results => {
          mergedResults.push(...results);
          if (mergedResults.length === teams.length) {
            subscriber.next(mergedResults);
            subscriber.complete();
          }
        });
      };
  
      observables.forEach(subscribeToQuery);
    });
  }
}
