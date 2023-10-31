import { Injectable } from '@angular/core';
import { TtEvent } from '../models/event';
import { Observable, take } from 'rxjs';
import { AngularFirestore  } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firestore: AngularFirestore) { }

  getEvent(id:string): Observable<TtEvent> {
    return this.firestore.doc<TtEvent>(`Events/${id}`).valueChanges();
  }

  getEvents(state:string) : Observable<TtEvent[]>{
    return this.firestore.collection<TtEvent>('Events', ref => ref.where('State', '==', state)
    ).valueChanges().pipe(take(1));
  }

}
