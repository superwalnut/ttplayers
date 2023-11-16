import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable, map, of, take } from 'rxjs';
import { Statistics } from '../models/statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private firestore: AngularFirestore) { 

  }

  getLatest() : Observable<Statistics>{
    return this.firestore.collection<Statistics>('Statistics', ref => 
    ref.orderBy('Id','desc').limit(1)
  ).valueChanges().pipe(
    take(1),
    map(items=>{
      if(items.length>0){
        return items[0];
      }
    })
    );
  }

}
