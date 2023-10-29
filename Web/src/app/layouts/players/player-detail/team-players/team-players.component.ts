import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Team } from 'src/app/models/team';
import { TeamPlayer } from 'src/app/models/team-player';

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.scss']
})
export class TeamPlayersComponent implements OnInit{
  @Input() teamPlayers:TeamPlayer[];

  count:number = 5;
  constructor() {
  }

  ngOnInit(): void {
  }

  toRating(player:Player)
  {
    return `${player.Rating}±${player.StDev}`;
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
}
