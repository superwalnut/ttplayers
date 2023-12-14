import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable, map, of, take } from 'rxjs';
import { Club } from './../models/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private firestore: AngularFirestore) { }

  getClub(id:string): Observable<Club> {
    return this.firestore.doc<Club>(`Clubs/${id}`).valueChanges();
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
