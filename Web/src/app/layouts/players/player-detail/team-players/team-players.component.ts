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
}
