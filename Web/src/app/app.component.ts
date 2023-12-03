import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TTPlayers';
  handleCredentialResponse:any;

  constructor(private router: Router, private ngZone:NgZone) {
    
  }

  ngOnInit(): void {

  }

}
