import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClubAutoComplete } from '../../../models/club-autocomplete';
import { ClubService } from 'src/app/service/club.service';
import { Observable, OperatorFunction, catchError, debounceTime, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-club-autocomplete',
  templateUrl: './club-autocomplete.component.html',
  styleUrls: ['./club-autocomplete.component.scss']
})
export class ClubAutocompleteComponent implements OnInit{
  @Input() clubAutoCompleteModel:any;
  @Output() actionTriggered = new EventEmitter<ClubAutoComplete>();
  searching = false;
  searchFailed = false;

  constructor(private clubService:ClubService) {

  }

  ngOnInit(): void {
    
  }

  onInputBlur() {
    // Emit the event when the button is clicked
    console.log('send model', this.clubAutoCompleteModel);
    this.actionTriggered.emit(this.clubAutoCompleteModel);
  }
  
  searchClub: OperatorFunction<string, readonly ClubAutoComplete[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    tap(() => (this.searching = true)),
    switchMap((term) =>
      this.clubService.searchClubsForAutoComplete(term).pipe(
        tap(() => (this.searchFailed = false)),
        map((clubs => {
          console.log('auto-result', clubs);
          return clubs.map(p =>{
            return {
              Label: `${p.Nickname} (${p.City}, ${p.State})`,
              ClubId: p.Id,
              Name: p.Name,
              Nickname: p.Nickname,
              State: p.State,
              City: p.City
            } as ClubAutoComplete;
          })
        })),
        catchError(error => {
          console.log('error-result', error);
          this.searchFailed = true;
          return of([]);
        }),
      ),
    ),
    tap(() => (this.searching = false)),
  );

  searchClubFormatter = (x: { Label: string }) => x.Label;

}
