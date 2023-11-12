import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from 'src/app/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, catchError, debounceTime, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { PlayerService } from 'src/app/service/player.service';
import { ClubService } from 'src/app/service/club.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  profileForm!: FormGroup;
  user:User;

  searching = false;
  searchFailed = false;
  public playerAutoCompleteModel: any;

  constructor(public authService: AuthService, private playerService:PlayerService, private clubService:ClubService) { }

  //public clubAutoCompleteModel: any;

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

  // searchClub: OperatorFunction<string, readonly any[]> = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     tap(() => (this.searching = true)),
  //     switchMap((term) =>
  //       this.clubService.searchClubsForAutoComplete(term).pipe(
  //         tap(() => (this.searchFailed = false)),
  //         catchError(() => {
  //           this.searchFailed = true;
  //           return of([]);
  //         }),
  //       ),
  //     ),
  //     tap(() => (this.searching = false)),
  // );
    
  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();

    this.profileForm = new FormGroup({
      searchPlayerId: new FormControl<string>('', [
        Validators.required,
      ]),
    });
  }

  saveProfile() {
    if(!this.profileForm.valid) {
      return;
    }

    console.log('selected', this.playerAutoCompleteModel);

  }


}
