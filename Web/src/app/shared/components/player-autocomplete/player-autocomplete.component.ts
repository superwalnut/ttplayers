import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, OperatorFunction, catchError, debounceTime, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { PlayerService } from 'src/app/service/player.service';
import { Profile } from '../../../models/profile';

@Component({
  selector: 'app-player-autocomplete',
  templateUrl: './player-autocomplete.component.html',
  styleUrls: ['./player-autocomplete.component.scss']
})
export class PlayerAutocompleteComponent {
  @Output() actionTriggered = new EventEmitter<void>();

  searching = false;
  searchFailed = false;
  playerAutoCompleteModel: any;

  constructor(private playerService:PlayerService) {
  }

  triggerAction() {
    // Emit the event when the button is clicked
    this.actionTriggered.emit(this.playerAutoCompleteModel);
  }

  searchPlayer: OperatorFunction<string, readonly {name, id, gender, state, rating, firstName, lastName}[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    tap(() => (this.searching = true)),
    switchMap((term) =>
      this.playerService.searchPlayerByNameForAutocomplete(term).pipe(
        tap(() => (this.searchFailed = false)),
        map((players => {
          return players.map(p =>{
            return { name : `${p.FirstName} ${p.LastName} (ID:${p.Id})`, id : p.Id, gender: p.Gender, state: p.State, rating: `${p.Rating}±${p.StDev}`, firstName: p.FirstName, lastName: p.LastName};
          })
        })),
        catchError(() => {
          this.searchFailed = true;
          return of([]);
        }),
      ),
    ),
    tap(() => (this.searching = false)),
  );

  searchPlayerFormatter = (x: { name: string }) => x.name;

}
