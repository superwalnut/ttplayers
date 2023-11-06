import { Injectable } from '@angular/core';
import { TtEvent } from '../models/event';
import { EventPlayer } from '../models/event-player';
import { Observable, of, take } from 'rxjs';
import { AngularFirestore  } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firestore: AngularFirestore) { }

  getEvent(id:string): Observable<TtEvent> {
    return this.firestore.doc<TtEvent>(`Events/${id}`).valueChanges();
  }

  getEventPlayer(id:string): Observable<EventPlayer> {
    return this.firestore.doc<EventPlayer>(`EventPlayers/${id}`).valueChanges();
  } 

  searchEvents(state:string, pageSize:number) : Observable<TtEvent[]>{
    console.log('search state', state);
    return this.firestore.collection<TtEvent>('Events', ref => 
      ref.where('State', 'in', [state,""])
      .orderBy('Date','desc')
      .orderBy('Id','asc')
      .limit(pageSize)
    ).valueChanges().pipe(take(1));
  }

  searchEventsWithPaging(state: string,  pageSize:number, lastDoc:TtEvent): Observable<TtEvent[]> {
    console.log('search state w paging', state);
    console.log('last doc', lastDoc);
    if(!lastDoc)
    {
      return of();
    }

    return this.firestore.collection<TtEvent>('Events', ref =>
      ref.where('State', 'in', [state,""])
      .orderBy('Date','desc')
      .orderBy('Id','asc')
      .startAfter(lastDoc.Date, lastDoc.Id)
      .limit(pageSize)
    ).valueChanges().pipe(take(1));
  }


}
