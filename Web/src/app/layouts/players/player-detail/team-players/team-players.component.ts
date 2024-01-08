import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Team } from 'src/app/models/team';
import { TeamPlayer } from 'src/app/models/team-player';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.scss']
})
export class TeamPlayersComponent implements OnInit{
  @Input() teamPlayers:TeamPlayer[];

  count:number = 5;
  constructor(private commonService:CommonService) {
  }

  ngOnInit(): void {
  }

  toRating(player:Player)
  {
    if(player.StDev>0){
      return `${player.Rating}±${player.StDev}`;
    }
    
    return `${player.Rating}`;
  }

  loadMore() {
    this.count += 5;
  }

  toInitials(player:TeamPlayer)
  {
      const firstInitial = player.FirstName.charAt(0);
      const lastInitial = player.LastName.charAt(0);
      return `${firstInitial}${lastInitial}`;
  }

  convertNameSlug(player:TeamPlayer)
  {
    return this.commonService.convertToSlug(player.FullName);
  }
}
