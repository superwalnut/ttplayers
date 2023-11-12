import { Component, OnInit } from '@angular/core';
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
  loginForm!: FormGroup;
  user:User;

  searching = false;
  searchFailed = false;

  constructor(public authService: AuthService, private playerService:PlayerService, private clubService:ClubService) { }

  public playerAutoCompleteModel: any;
  public clubAutoCompleteModel: any;

	searchPlayer: OperatorFunction<string, readonly any[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
      tap(() => (this.searching = true)),
			switchMap((term) =>
				this.playerService.searchPlayerByNameForAutocomplete(term).pipe(
					tap(() => (this.searchFailed = false)),
					catchError(() => {
						this.searchFailed = true;
						return of([]);
					}),
				),
			),
			tap(() => (this.searching = false)),
  );

  searchClub: OperatorFunction<string, readonly any[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap((term) =>
        this.clubService.searchClubsForAutoComplete(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }),
        ),
      ),
      tap(() => (this.searching = false)),
  );
    
  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();

    this.loginForm = new FormGroup({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  submit() {

  }
}
