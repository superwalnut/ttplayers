import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LocalstorageService } from './localstorage.service';
import { Observable, map, of } from 'rxjs';
import { PlayerOpponents } from '../models/player-opponent';
import { GlobalConstants } from './global.constants';

@Injectable({
  providedIn: 'root'
})
export class PlayerOpponentService {

  constructor(private firestore: AngularFirestore, private lsService:LocalstorageService) { }
  
  getPlayerOpponents(id:string): Observable<PlayerOpponents> {
    const val = this.lsService.getItemWithExpiration(`${GlobalConstants.PLAYER_OPPONENT_DETAIL}-${id}`);
    if(val){
      const opponents = val as PlayerOpponents;
      console.log('ls opponents', opponents);
      return of(opponents);
    }
    else {
      return this.firestore.doc<PlayerOpponents>(`PlayerOpponents/${id}`).valueChanges().pipe(
        map(opponents=>{
          this.lsService.setItemWithExpiration(`${GlobalConstants.PLAYER_OPPONENT_DETAIL}-${id}`, opponents, GlobalConstants.LOCAL_STORAGE_SHORT_EXPIRY);
          return opponents;
        })
      );
    }
  }
}
