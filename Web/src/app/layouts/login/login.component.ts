import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;
  loading = false;

  passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$';
  errors:any[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly toastrService: ToastrService,
    private readonly router: Router
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

  toggleDisplayPassword(): void {
    this.showPassword = !this.showPassword;
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
        this.toastrService.show('User logged in successfuly');
        this.router.navigate(['/', 'dashboard']);
      })
      .catch((error) => this.toastrService.error(error.message))
      .finally(() => (this.loading = false));
  }

  googleLogin() {
    this.authService.SignInWithGooglePopUp().then(x=>{
      console.log('sign in with google');
    });
  }

  facebookLogin() {
    this.authService.signInWithFacebookPopup().then(x=>{
      console.log('sign in with facebook');
    });
  }
}