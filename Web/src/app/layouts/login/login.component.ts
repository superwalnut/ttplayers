import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../service/auth.service';
import { UserProfileService } from 'src/app/service/user-profile.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { GlobalConstants } from 'src/app/service/global.constants';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;

  passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$';
  errors:any[] = [];
  
  constructor(
    private readonly authService: AuthService,
    private readonly toastrService: ToastrService,
    private readonly router: Router,
    private readonly profileService: UserProfileService,
    private readonly lsService:LocalstorageService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [
        Validators.required, 
        Validators.pattern(this.passwordPattern)
      ]),
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.errors = [];

      if(this.loginForm.get('email').errors){
        this.errors.push({ field: "Email", message : "Please enter your email." });
      }

      if(this.loginForm.get('password').errors){
        this.errors.push({ field: "Password", message : "Please enter a valid password. Allows only letters (uppercase & lowercase) and digits, requiring a minimum length of 8 characters." });
      }

      return;
    }

    this.loading = true;

    this.authService
      .signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
          this.toastrService.success('User logged in successfully');
          this.router.navigate(['/', 'dashboard']);
      })
      .catch((error) => {
        this.errors = [];
        this.errors.push({field: "Password", message: "The password you entered doesn't match our record, please try again."});
      })
      .finally(() => (this.loading = false));
  }

  googleLogin() {
    const user = this.authService.getLoggedInUser();
    if(user) {
      // if already sign in, nothing happens
      this.router.navigate(['/', 'dashboard']);
      return;
    }

    const existingProfile = this.lsService.getItemWithExpiration(GlobalConstants.USER_PROFILE) as Profile;
    this.authService.SignInWithGooglePopUp().then(profile=>{
      console.log('sign in with google', profile);
      if(existingProfile && existingProfile.UserId == profile.UserId){
        // this user already logged in previously, no need to save profile
        console.log('profile already created previously');
        if(existingProfile.IsCompleted){
          this.router.navigate(['/', 'dashboard']);
        } else {
          this.router.navigate(['/', 'profile']);
        }
      }
      else {
        // new registered user
        this.profileService.saveProfile(profile.UserId, profile).then(x=>{
          this.toastrService.success('User registered successfully');
          this.router.navigate(['/', 'profile']);
        });
      }
    });
  }

  facebookLogin() {
    const user = this.authService.getLoggedInUser();
    if(user) {
      // if already sign in, nothing happens
      this.router.navigate(['/', 'dashboard']);
      return;
    }

    const existingProfile = this.lsService.getItemWithExpiration(GlobalConstants.USER_PROFILE) as Profile;
    this.authService.signInWithFacebookPopup().then(profile=>{
      console.log('sign in with facebook', profile);
      if(existingProfile && existingProfile.UserId == profile.UserId){
        // this user already logged in previously, no need to save profile
        console.log('profile already created previously');
        if(existingProfile.IsCompleted){
          this.router.navigate(['/', 'dashboard']);
        } else {
          this.router.navigate(['/', 'profile']);
        }
      }
      else {
        // new registered user
        this.profileService.saveProfile(profile.UserId, profile).then(x=>{
          this.toastrService.success('User registered successfully');
          this.router.navigate(['/', 'profile']);
        });
      }
    });
  }

}