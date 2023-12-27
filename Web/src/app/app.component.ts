import { Component, NgZone, OnInit } from '@angular/core';
import { TitleService } from '../app/service/title.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TTPlayers';
  handleCredentialResponse:any;

  constructor(private titleService: TitleService) {
    
  }

  ngOnInit(): void {
    this.titleService.boot();
  }

}
