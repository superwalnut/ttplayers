import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player-match',
  templateUrl: './player-match.component.html',
  styleUrls: ['./player-match.component.scss']
})
export class PlayerMatchComponent implements OnInit{
  @Input() player:Player;
  
  gaugeType:string = "semi";
  wins:number = 0;
  gaugeLabel:string = "";
  gaugeAppendText:string = "wins";
  max:number = 100;

  ngOnInit(): void {
    this.max = this.player.TotalPlayedMatches;
    this.wins = this.player.TotalWins;
  }
  

}
