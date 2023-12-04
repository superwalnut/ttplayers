import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerAutoComplete } from 'src/app/models/player-autocomplete';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserProfileService } from 'src/app/service/user-profile.service';
import { User } from 'src/app/models/user';
import { Profile } from 'src/app/models/profile';
import { of, switchMap, zip } from 'rxjs';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  profileForm!: FormGroup;
  showPassword = false;
  loading = false;

  selectedPlayerProfile:PlayerAutoComplete; // profile selected from the autocomplete

  passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$';

  errors:any[] = [];

  user:User;
  profile:Profile;

  showDashboard:boolean;

  constructor(    
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private profileService: UserProfileService,
    private playerService: PlayerService
  ) {
  }
  
  ngOnInit() {
    this.user = this.authService.getLoggedInUser();

    if(!this.user)
    {
      this.router.navigate(['/', 'login']);
      return;
    }

    // init form
    this.profileForm = new FormGroup({
      firstName: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      lastName: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      postcode: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(4),
      ]),
      suburb: new FormControl<string>('', [
        Validators.required,
      ]),
      birthYear:new FormControl<string>('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]), 
      grip:new FormControl<string>('', [
        Validators.maxLength(20),
      ]), 
      rubber:new FormControl<string>('', [
        Validators.maxLength(20),
      ]), 
    });

    // get form values from profile service
    this.profileService.getProfile(this.user.Id).pipe(
      switchMap(profile=>{
        return zip(of(profile), this.playerService.getPlayer(profile.PlayerId));
      })
    ).subscribe(([profile, player])=>{
      this.profile = profile;

      this.profileForm.patchValue({
        firstName: profile.FirstName,
        lastName: profile.LastName,
        suburb: profile.Suburb,
        postcode: profile.Postcode,
        birthYear: profile.BornYear,
        grip: profile.Grip,
        rubber: profile.RubberType
      });

      this.selectedPlayerProfile = {
        Label: `${player.FirstName} ${player.LastName} (ID:${player.Id})`,
        PlayerId: player.Id,
        Rating: player.Rating,
        StDev: player.StDev,
        FullName: player.FullName,
        FirstName: player.FirstName,
        LastName: player.LastName,
        State: player.State,
        Gender: player.Gender
      } as PlayerAutoComplete;
    });
  }
  
  handlePlayerAutoCompleteAction(profile:PlayerAutoComplete) {
    console.log('profile selected', profile);
    this.selectedPlayerProfile = profile;
  }

  updateProfile() {
    if (this.profileForm.invalid || !this.selectedPlayerProfile) {

      console.log('form is invalid');

      this.errors =[];

      if(this.profileForm.get('firstName').errors){
        this.errors.push({ field: "First Name", message : "Please enter your first name." });
      }

      if(this.profileForm.get('lastName').errors){
        this.errors.push({ field: "Last Name", message : "Please enter your last name." });
      }

      if(!this.selectedPlayerProfile){
        this.errors.push({ field: "Rating Central ID", message : "Please select your rating central ID." });
      }

      if(this.profileForm.get('birthYear').errors){
        this.errors.push({ field: "Birth Year", message : "Please enter your birth year." });
      }

      if(this.profileForm.get('postcode').errors){
        this.errors.push({ field: "Postcode", message : "Please enter your postcode." });
      }

      if(this.profileForm.get('suburb').errors){
        this.errors.push({ field: "Suburb", message : "Please enter your suburb." });
      }

      if(this.profileForm.get('grip').errors){
        this.errors.push({ field: "Racket Grip", message : "Please enter your racket grip." });
      }

      if(this.profileForm.get('rubber').errors){
        this.errors.push({ field: "Rubber Type", message : "Please enter your rubber type." });
      }

      return;
    }

    this.loading = true;
    const form = this.profileForm.value;

    if(this.selectedPlayerProfile){
      const profile = {
        UserId: this.user.Id,
        PlayerId: this.selectedPlayerProfile.PlayerId,
        FullName: `${form.firstName} ${form.lastName}`,
        FirstName: form.firstName,
        LastName: form.lastName,
        State: this.selectedPlayerProfile.State,
        Gender: this.selectedPlayerProfile.Gender,
        BornYear: form.birthYear,
        Postcode: form.postcode,
        Suburb: form.suburb,
        Grip: form.grip,
        RubberType: form.rubber,
        IsCompleted:true,
        LastUpdated: new Date()
      } as Profile;
      this.profileService.saveProfile(this.user.Id, profile).then(x=>{
        this.toastrService.success('Your profile is updated successfuly');
        this.errors =[];
        this.profile = profile;
        this.showDashboard = true;
      });
    }
    else {
      this.toastrService.error('You must select a rating central player');
    }
  }

}
