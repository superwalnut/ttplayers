import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
import { PlayerAutoComplete } from 'src/app/models/player-autocomplete';
import { Profile } from 'src/app/models/profile';
import { UserProfileService } from 'src/app/service/user-profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  showPassword = false;
  loading = false;

  selectedPlayerProfile:PlayerAutoComplete; // profile selected from the autocomplete

  constructor(
    private firebaseService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private profileService: UserProfileService
  ) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      lastName: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      postcode: new FormControl<string>('', [
        Validators.maxLength(4),
      ]),
      birthYear:new FormControl<string>('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]), 
      grip:new FormControl<string>('', []), 
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  toggleDisplayPassword(): void {
    this.showPassword = !this.showPassword;
  }

  createUser(): void {
    if (this.registrationForm.invalid) {
      console.log('form is invalid');
      return;
    }

    this.loading = true;
    const form = this.registrationForm.value;

    this.firebaseService
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(uid => {

        if(this.selectedPlayerProfile){
          const profile = {
            UserId: uid,
            PlayerId: this.selectedPlayerProfile.PlayerId,
            FullName: this.selectedPlayerProfile.FullName,
            FirstName: this.selectedPlayerProfile.FirstName,
            LastName: this.selectedPlayerProfile.LastName,
            State: this.selectedPlayerProfile.State,
            Gender: this.selectedPlayerProfile.Gender,
            BornYear: form.birthYear,
            Postcode: form.postcode,
            Grip: form.grip
          } as Profile;
          this.profileService.saveProfile(uid, profile).then(x=>{
            this.toastrService.show('User registred successfuly');
            this.router.navigate(['/', 'dashboard']);
          });
        }
        else {
          this.toastrService.show('You must select a rating central player');
        }
      })
      .catch((error) => this.toastrService.error(error.message))
      .finally(() => (this.loading = false));
  }

  handlePlayerAutoCompleteAction(profile:PlayerAutoComplete) {
    console.log('profile selected', profile);
    this.selectedPlayerProfile = profile;
  }
}