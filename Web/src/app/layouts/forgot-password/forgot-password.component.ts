import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit{
  forgotForm!: FormGroup;
  loading = false;
  errors:any[] = [];

  constructor(public authService: AuthService,
    private readonly toastrService: ToastrService,
  ) { 
    
  }

  ngOnInit(): void {
    this.forgotForm = new FormGroup({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ])
    });
  }

  forgotPassword(){
    if (this.forgotForm.invalid) {
      this.errors = [];

      if(this.forgotForm.get('email').errors){
        this.errors.push({ field: "Email", message : "Please enter your email." });
      }

      return;
    }

    this.loading = true;

    this.authService.sendPasswordResetEmail(this.forgotForm.value.email).then(x=>{
      this.errors = [];
      this.toastrService.success(`Forgot password email has been sent, please check your inbox. If you didn't receive it, please also check your spam folder and add noreply@ttplayers.com.au to your safe list.`);
    }).catch((error) => {
      this.errors = [];
      this.errors.push({field: "Email", message: "The email you entered doesn't match our record, please try again."});
    })
    .finally(() => (this.loading = false));

  }
}
