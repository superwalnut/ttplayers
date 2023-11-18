import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Statistics } from 'src/app/models/statistics';

@Component({
  selector: 'app-player-win-rate',
  templateUrl: './player-win-rate.component.html',
  styleUrls: ['./player-win-rate.component.scss']
})
export class PlayerWinRateComponent implements OnInit {
  @Input() player: Player;
  @Input() stats: Statistics;

  playerRate:number;
  nationalRate:number;
  /**
   *
   */
  constructor() {
    
  }
  ngOnInit(): void {
    this.playerRate = this.toPlayerWinRate();
    this.nationalRate = this.toNationalAverageRate();
  }

  toPlayerWinRate() {
    const rate = this.player.YearToDateWins / (this.player.YearToDateWins+ this.player.YearToDateLoses);
    return Math.round(rate * 100);
  }

  toNationalAverageRate() {
    return Math.round(this.stats.AverageWinRate * 100);
  }

}
