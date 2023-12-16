import { Component, Input, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubSetup } from 'src/app/models/club-setup';

@Component({
  selector: 'app-club-profile-players',
  templateUrl: './club-profile-players.component.html',
  styleUrls: ['./club-profile-players.component.scss']
})
export class ClubProfilePlayersComponent implements OnInit{
  @Input() club:Club
  @Input() clubSetup:ClubSetup

  
  ngOnInit(): void {
    
  }

}
