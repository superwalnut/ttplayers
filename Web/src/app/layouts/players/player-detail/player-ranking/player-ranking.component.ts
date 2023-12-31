import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Statistics } from 'src/app/models/statistics';

@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.scss']
})
export class PlayerRankingComponent implements OnInit{
  @Input() player: Player;
  @Input() stats: Statistics;

  nationalRanking:number;
  stateRanking:number;

  totalPlayers:number;
  stateTotalPlayers:number;

  constructor() {
    
  }

  ngOnInit(): void {
    this.nationalRanking = this.toNationalRankingPosition();
    this.stateRanking = this.toStateRankingPosition();
    this.totalPlayers = this.toTotalPlayers();
    this.stateTotalPlayers = this.toStateTotalPlayers();
  }

  toNationalRankingPosition() : number{
    if(this.player.Gender =="M" && this.player.NationalGenderRanking>0) {
      
      const pos = (this.stats.TotalMenPlayerCount - this.player.NationalGenderRanking) * 100 / this.stats.TotalMenPlayerCount;
      console.log('pos men', Math.floor(pos));
      return Math.floor(pos);
    }

    if(this.player.Gender == "F" && this.player.NationalGenderRanking) {
      const pos = (this.stats.TotalWomenPlayerCount - this.player.NationalGenderRanking) * 100 / this.stats.TotalWomenPlayerCount;
      console.log('pos women', Math.floor(pos));
      return Math.floor(pos);
    }

    return 0;
  }

  toStateRankingPosition() : number{
    if(this.player.Gender =="M") {

      const totalPlayers = this.stats.StateMenPlayerCounts[this.player.State];
      console.log('state total men', totalPlayers);

      if(this.player.StateGenderRanking>0){
        const pos = (totalPlayers - this.player.StateGenderRanking) * 100 / totalPlayers;
        return Math.floor(pos);
      }
    }

    if(this.player.Gender == "F") {

      const totalPlayers = this.stats.StateWomenPlayerCounts[this.player.State];
      console.log('state total women', totalPlayers);
      if(this.player.StateGenderRanking>0){
        const pos = (totalPlayers - this.player.StateGenderRanking) * 100 / totalPlayers;
        return Math.floor(pos);
      }
    }

    return 0;
  }

  toTotalPlayers() {
    if(this.player.Gender =="M") {
      return this.stats.TotalMenPlayerCount;
    }
    if(this.player.Gender == "F") {
      return this.stats.TotalWomenPlayerCount;
    }

    return this.stats.TotalPlayerCount;
  }

  toStateTotalPlayers() {
    if(this.player.Gender =="M") {
      return this.stats.StateMenPlayerCounts[this.player.State];
    }
    if(this.player.Gender == "F") {
      return this.stats.StateWomenPlayerCounts[this.player.State];
    }

    return this.stats.TotalPlayerCount;
  }

}
