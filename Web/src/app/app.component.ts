import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TTPlayers';
  handleCredentialResponse:any;

  constructor() {
    
  }

  ngOnInit(): void {
  }
}
