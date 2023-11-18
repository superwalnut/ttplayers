import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable, map, of, take } from 'rxjs';
import { Statistics } from '../models/statistics';
import { LocalstorageService } from './localstorage.service';
import { GlobalConstants } from './global.constants';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private firestore: AngularFirestore, private lsService:LocalstorageService) { 
  }

  getLatest() : Observable<Statistics>{
    const val = this.lsService.getItemWithExpiration(GlobalConstants.STATS_KEY);
    if(val){
      const stats = val as Statistics;
      console.log('ls stats', stats);
      return of(stats);
    } else {
      console.log('calling db for stats');
      return this.firestore.collection<Statistics>('Statistics', ref =>
        ref.orderBy('Id','desc').limit(1)
      ).valueChanges().pipe(
        map(items=>{
          if(items.length>0){
            this.lsService.setItemWithExpiration(GlobalConstants.STATS_KEY, items[0], GlobalConstants.LOCAL_STORAGE_EXPIRY);
            console.log('save ls stats', items[0]);
            return items[0];
          }
        })
        );
      }
    }
}
