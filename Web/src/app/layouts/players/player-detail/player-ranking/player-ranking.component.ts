import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Statistics } from 'src/app/models/statistics';

@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.scss']
})
export class PlayerRankingComponent {
  @Input() player: Player;
  @Input() stats: Statistics;

  /**
   *
   */
  constructor() {
    
  }

  toNationalRankingPosition() {
    if(this.player.Gender =="M" && this.player.NationalGenderRanking>0) {
      
      const pos = Math.round((this.stats.TotalMenPlayerCount - this.player.NationalGenderRanking) * 100 / this.stats.TotalMenPlayerCount);
      console.log('pos men', pos);
      return pos;
    }

    if(this.player.Gender == "F" && this.player.NationalGenderRanking) {
      const pos = Math.round((this.stats.TotalWomenPlayerCount - this.player.NationalGenderRanking) * 100 / this.stats.TotalWomenPlayerCount);
      console.log('pos men', pos);
      return pos;
    }

    return 0;
  }

  toStateRankingPosition() : number{
    if(this.player.Gender =="M") {

      const totalPlayers = this.stats.StateMenPlayerCounts[this.player.State];
      console.log('state total men', totalPlayers);

      if(this.player.StateGenderRanking>0){
        const pos = Math.round((totalPlayers - this.player.StateGenderRanking) * 100 / totalPlayers);
        return pos;
      }
    }

    if(this.player.Gender == "F") {

      const totalPlayers = this.stats.StateWomenPlayerCounts[this.player.State];
      console.log('state total women', totalPlayers);
      if(this.player.StateGenderRanking>0){
        const pos = Math.round((totalPlayers - this.player.StateGenderRanking) * 100 / totalPlayers);
        return pos;
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
