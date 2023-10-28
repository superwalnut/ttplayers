import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Player } from '../models/player';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class SndttaTeamService {

  constructor(private firestore: AngularFirestore) { }

  searchTeams(teams: string[]): Observable<Team[]> {
    const queries = teams.map(team => {
      return this.firestore.collection<Team>('SndttaTeam', ref =>
        ref.where('Id', '==', team)
      ).valueChanges();
    });
    return this.combineObservables(teams, queries);
  }

  private combineObservables(teams: string[], observables: Observable<Team[]>[]): Observable<Team[]> {
    return new Observable<Team[]>(subscriber => {
      const mergedResults: Team[] = [];
  
      const subscribeToQuery = (query: Observable<Team[]>) => {
        query.subscribe(results => {
          mergedResults.push(...results);
          if (mergedResults.length === teams.length) {
            subscriber.next(mergedResults);
            subscriber.complete();
          }
        });
      };
  
      observables.forEach(subscribeToQuery);
    });
  }
}
