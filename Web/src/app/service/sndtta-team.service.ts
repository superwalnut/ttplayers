import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { Observable, map, of } from 'rxjs';
import { Player } from '../models/player';
import { Team } from '../models/team';
import { LocalstorageService } from './localstorage.service';
import { GlobalConstants } from './global.constants';

@Injectable({
  providedIn: 'root'
})
export class SndttaTeamService {

  constructor(private firestore: AngularFirestore, private lsService:LocalstorageService) { }

  searchTeams(teamNames: string[]): Observable<Team[]> {
    if(!teamNames)
      return of(null);

    const queries = teamNames.map(teamName => {
      const val = this.lsService.getItemWithExpiration(`${GlobalConstants.TEAM_DETAIL}-${teamName}`);
      if(val){
        const team = val as Team;
        console.log('ls club', team);
        return of(team);
      }

      return this.firestore.collection<Team>('SndttaTeam', ref =>
        ref.where('Id', '==', teamName)
      ).valueChanges().pipe(
        map(team=>{
          if(team){
            this.lsService.setItemWithExpiration(`${GlobalConstants.TEAM_DETAIL}-${teamName}`, team[0], GlobalConstants.LOCAL_STORAGE_SHORT_EXPIRY);
            return team[0];
          }
        })
      );
    });
    return this.combineObservables(teamNames, queries);
  }

  private combineObservables(teams: string[], observables: Observable<Team>[]): Observable<Team[]> {
    return new Observable<Team[]>(subscriber => {
      const mergedResults: Team[] = [];
  
      const subscribeToQuery = (query: Observable<Team>) => {
        query.subscribe(results => {
          mergedResults.push(results);
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
