import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Player } from '../models/player';
import { PlayerHistory } from '../models/player-history';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private firestore: AngularFirestore) { }

  searchPlayerByName(searchTerm: string): Observable<Player[]> {
    return this.firestore.collection<Player>('Players', ref =>
      ref.where('Names', 'array-contains', searchTerm.toLowerCase())
    ).valueChanges();
  }

  getPlayer(id:string): Observable<Player> {
    return this.firestore.doc<Player>(`Players/${id}`).valueChanges();
  }

  getPlayerHistory(id:string): Observable<PlayerHistory>{
    return this.firestore.doc<PlayerHistory>(`PlayerHistories/${id}`).valueChanges();
  }

}
