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
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  toggleDisplayPassword(): void {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.loginForm.invalid) {
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