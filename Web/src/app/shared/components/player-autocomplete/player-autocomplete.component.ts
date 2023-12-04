import { Component, EventEmitter, Input, Output, LOCALE_ID } from '@angular/core';
import { Observable, OperatorFunction, catchError, debounceTime, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { PlayerService } from 'src/app/service/player.service';
import { PlayerAutoComplete } from '../../../models/player-autocomplete';

@Component({
  selector: 'app-player-autocomplete',
  templateUrl: './player-autocomplete.component.html',
  styleUrls: ['./player-autocomplete.component.scss']
})
export class PlayerAutocompleteComponent {
  @Input() playerAutoCompleteModel:any;
  @Output() actionTriggered = new EventEmitter<PlayerAutoComplete>();

  searching = false;
  searchFailed = false;

  constructor(private playerService:PlayerService) {
  }

  onInputBlur() {
    // Emit the event when the button is clicked
    console.log('send model', this.playerAutoCompleteModel);

    this.actionTriggered.emit(this.playerAutoCompleteModel);
  }

  searchPlayer: OperatorFunction<string, readonly PlayerAutoComplete[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    tap(() => (this.searching = true)),
    switchMap((term) =>
      this.playerService.searchPlayerByNameForAutocomplete(term).pipe(
        tap(() => (this.searchFailed = false)),
        map((players => {
          return players.map(p =>{
            return {
              Label: `${p.FirstName} ${p.LastName} (ID:${p.Id})`,
              PlayerId: p.Id,
              Rating: p.Rating,
              StDev: p.StDev,
              FullName: p.FullName,
              FirstName: p.FirstName,
              LastName: p.LastName,
              State: p.State,
              Gender: p.Gender
            } as PlayerAutoComplete;
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

  searchPlayerFormatter = (x: { Label: string }) => x.Label;

}
