import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable, map, of, take } from 'rxjs';
import { Club } from './../models/club';
import { LocalstorageService } from './localstorage.service';
import { GlobalConstants } from './global.constants';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private firestore: AngularFirestore, private lsService:LocalstorageService) { }

  getClub(id:string): Observable<Club> {
    const val = this.lsService.getItemWithExpiration(`${GlobalConstants.CLUB_DETAIL}-${id}`);
    if(val){
      const club = val as Club;
      console.log('ls club', club);
      return of(club);
    }
    else {
      return this.firestore.doc<Club>(`Clubs/${id}`).valueChanges().pipe(
        map(club=>{
          this.lsService.setItemWithExpiration(`${GlobalConstants.CLUB_DETAIL}-${id}`, club, GlobalConstants.LOCAL_STORAGE_SHORT_EXPIRY);
          return club;
        })
      );
    }
  }

  getClubByIds(ids:string[]) : Observable<Club[]> {
    console.log('getClubsByIds', ids);
    const queries = ids.map(id => {
      return this.firestore.doc<Club>(`Clubs/${id.trim()}`).valueChanges();
    });
    return this.combineObservables(ids, queries);
  }

  private combineObservables(clubIds: string[], observables: Observable<Club>[]): Observable<Club[]> {
    return new Observable<Club[]>(subscriber => {
      const mergedResults: Club[] = [];
  
      const subscribeToQuery = (query: Observable<Club>) => {
        query.subscribe(results => {
          mergedResults.push(results);
          if (mergedResults.length === clubIds.length) {
            subscriber.next(mergedResults);
            subscriber.complete();
          }
        });
      };
  
      observables.forEach(subscribeToQuery);
    });
  }

  searchClubs(keyword:string, state:string, pageSize:number) : Observable<Club[]>{
    console.log('search state', state);

    if(keyword){
      const wordsArray = keyword.toLocaleLowerCase().split(" ");
      return this.firestore.collection<Club>('Clubs', ref => 
        ref.where('State', '==', state)
        .where('Tags', 'array-contains-any', wordsArray)
        .where('Status', '==', 'Active')
        .orderBy('Name','asc')
        .limit(pageSize)
      ).valueChanges();
    } 
      
    return this.firestore.collection<Club>('Clubs', ref => 
        ref.where('State', '==', state)
        .where('Status', '==', 'Active')
        .orderBy('Name','asc')
        .limit(pageSize)
      ).valueChanges();
  }

  searchClubsWithPaging(keyword:string, state: string, pageSize:number, lastDoc:Club): Observable<Club[]> {
    console.log('search state w paging', state);
    console.log('last doc', lastDoc);
    if(!lastDoc)
    {
      return of();
    }
    //Tags Arrays State Ascending Status Ascending Name Ascending __name__ Ascending
    if(keyword){
      const wordsArray = keyword.toLocaleLowerCase().split(" ");
      return this.firestore.collection<Club>('Clubs', ref =>
        ref.where('State', '==', state)
        .where('Tags', 'array-contains-any', wordsArray)
        .where('Status', '==', 'Active')
        .orderBy('Name','asc')
        .startAfter(lastDoc.Name)
        .limit(pageSize)
      ).valueChanges();
    }

    return this.firestore.collection<Club>('Clubs', ref =>
      ref.where('State', '==', state)
      .where('Status', '==', 'Active')
      .orderBy('Name','asc')
      .startAfter(lastDoc.Name)
      .limit(pageSize)
    ).valueChanges();
  }

  searchClubsForAutoComplete(keyword:string) : Observable<any[]>{
    console.log('search autocomplete', keyword);
    if(keyword){
      console.log('searching..', keyword);

      const wordsArray = keyword.toLocaleLowerCase().split(" ");
      return this.firestore.collection<Club>('Clubs', ref => 
        ref
        .where('Tags', 'array-contains-any', wordsArray)
        .where('Status', '==', 'Active')
        .orderBy('Name','asc')
        .limit(10)
      ).valueChanges();
    } else {
      return of(null);
    }
  }
}
