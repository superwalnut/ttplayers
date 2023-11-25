import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Statistics } from 'src/app/models/statistics';

@Component({
  selector: 'app-player-win-rate',
  templateUrl: './player-win-rate.component.html',
  styleUrls: ['./player-win-rate.component.scss']
})
export class PlayerWinRateComponent implements OnInit  {
  @Input() player: Player;
  @Input() stats: Statistics;

  hasWtdRate:boolean;

  playerRate:number;
  nationalRate:number;
  /**
   *
   */
  constructor() {
    
  }

  ngOnInit(): void {
    console.log('win rate', this.stats);
    this.hasWtdRate = this.player.YearToDateWins+ this.player.YearToDateLoses > 0;
    console.log('YTD wins', this.player.YearToDateWins);
    console.log('YTD loses', this.player.YearToDateLoses);
    this.playerRate = this.toPlayerWinRate();
    console.log('playerRate', this.playerRate);
    this.nationalRate = this.toNationalAverageRate();
    console.log('nationalRate', this.nationalRate);
  }

  toPlayerWinRate() {
    if(!this.stats)
      return 0;

    if(this.player.YearToDateWins+ this.player.YearToDateLoses > 0) {
      const rate = this.player.YearToDateWins / (this.player.YearToDateWins+ this.player.YearToDateLoses);
      return Math.round(rate * 100);
    }
    
    const rate = this.player.TotalWins / (this.player.TotalPlayedMatches);
    return Math.round(rate * 100);
  }

  toNationalAverageRate() {
    if(this.stats){
      return Math.round(this.stats.AverageWinRate * 100);
    }
    return 0;
  }

}
