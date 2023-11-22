import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Competitor } from './../models/competitor';
import { Observable, first, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitorService {
  maxCount:number = 50;

  constructor(private firestore: AngularFirestore) { }
  
  async addCompetitor(competitor:Competitor) : Promise<void>{
    const count = await this.countCompetitors(competitor.UserId).pipe(first()).toPromise();
    if(count < this.maxCount){
      competitor.Id = `${competitor.UserId}-${competitor.CompetitorPlayerId}`;
      const ref = this.firestore.collection('Competitors').doc(`${competitor.UserId}-${competitor.CompetitorPlayerId}`);
      const result = ref.set(competitor, {merge: true});
      return result;
    } else {
      throw new Error(`You can only have ${this.maxCount} competitors.`);
    }
  }

  removeCompetitor(competitorId:string) : Promise<void> {
    const ref = this.firestore.collection('Competitors').doc(competitorId);
    const result = ref.delete();
    return result;
  }

  getCompetitor(uid:string, competitorPlayerId:string) : Observable<Competitor> {
    const competitorId = `${uid}-${competitorPlayerId}`;
    return this.firestore.doc<Competitor>(`Competitors/${competitorId}`).valueChanges();
  }

  getCompetitors(userId:string) : Observable<Competitor[]> {
    return this.firestore.collection<Competitor>('Competitors', ref =>
        ref
        .where('UserId', '==', userId)
      ).valueChanges().pipe();
  }
  
  countCompetitors(userId:string) {
    const collectionRef = this.firestore.collection<Competitor>('Competitors', ref=> ref.where('UserId', '==', userId));
    return collectionRef.get().pipe(map(snap=>{
      return snap.size;
    }));
  }
}
