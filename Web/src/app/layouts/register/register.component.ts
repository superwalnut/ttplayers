import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  showPassword = false;
  loading = false;

  constructor(
    private readonly firebaseService: AuthService,
    private readonly toastrService: ToastrService,
    private readonly router: Router
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
    const user = this.registrationForm.value;

    this.firebaseService
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.toastrService.show('User registred successfuly');
        this.router.navigate(['/', 'dashboard']);
      })
      .catch((error) => this.toastrService.error(error.message))
      .finally(() => (this.loading = false));
  }
}