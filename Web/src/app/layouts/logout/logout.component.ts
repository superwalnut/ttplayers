import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  /**
   *
   */
  constructor(private authSerivce:AuthService, private router:Router) {
    this.authSerivce.logout().then(x=>{
      this.router.navigate(['/']);
    });
  }
}
