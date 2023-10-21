import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private firestore: AngularFirestore) { }

  searchPlayerByName(searchTerm: string): Observable<Player[]> {
    return this.firestore.collection<Player>('Players', ref =>
      ref.where('Names', 'array-contains', searchTerm)
    ).valueChanges();
  }
}
