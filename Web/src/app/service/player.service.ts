import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable, map, of, take } from 'rxjs';
import { Player } from '../models/player';
import { PlayerHistory } from '../models/player-history';
import { LocalstorageService } from './localstorage.service';
import { GlobalConstants } from './global.constants';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private firestore: AngularFirestore, private lsService:LocalstorageService) { }

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

  searchByState(state:string, pageSize:number): Observable<Player[]> {
    const val = this.lsService.getItemWithExpiration(`${GlobalConstants.SEARCH_PLAYERS_BY_STATE}-${state}`);
    if(val){
      const players = val as Player[];
      console.log('ls players', players);
      return of(players);
    } else {
      if(state){
        return this.firestore.collection<Player>('Players', ref =>
          ref
          .where('State', '==', state)
          .orderBy('LastPlayed', 'desc')
          .limit(pageSize)
        ).valueChanges().pipe(
          map(players=>{
            this.lsService.setItemWithExpiration(`${GlobalConstants.SEARCH_PLAYERS_BY_STATE}-${state}`, players, GlobalConstants.LOCAL_STORAGE_SHORT_EXPIRY);
            return players;
          })
        );
      }
      else {
        return of([] as Player[]);
      }
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

  searchByStateWithPaging(state:string, pageSize:number, lastPlayer:Player): Observable<Player[]> {
    console.log('search by state', state);
    console.log('last player id', lastPlayer);
    if(state){
      return this.firestore.collection<Player>('Players', ref =>
        ref
        .where('State', '==', state)
        .orderBy('LastPlayed', 'desc')
        .startAfter(lastPlayer.LastPlayed)
        .limit(pageSize)
      ).valueChanges();
    }
    else {
      return of([] as Player[]);
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
    const val = this.lsService.getItemWithExpiration(`${GlobalConstants.PLAYER_DETAIL}-${id}`);
    if(val){
      const player = val as Player;
      console.log('ls player', player);
      return of(player);
    }
    else {
      return this.firestore.doc<Player>(`Players/${id}`).valueChanges().pipe(
        map(player=>{
          this.lsService.setItemWithExpiration(`${GlobalConstants.PLAYER_DETAIL}-${id}`, player, GlobalConstants.LOCAL_STORAGE_SHORT_EXPIRY);
          return player;
        })
      );
    }
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

    if(playerIds.length<=0){
      return of(null);
    }
    
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
