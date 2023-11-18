import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js/auto';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player-opponent',
  templateUrl: './player-opponent.component.html',
  styleUrls: ['./player-opponent.component.scss']
})
export class PlayerOpponentComponent implements OnInit{
  @Input() player: Player;
  public opponentChart: any;

  totalLostOpponents:number;

  ngOnInit(): void {
    this.createChart();
  }
  
  createChart(){
  
    this.totalLostOpponents = this.player.TotalOpponentCount - this.player.TotalBeatPlayersCount;
    const data = {
      labels: [`Won (${this.player.TotalBeatPlayersCount})`, `Lost (${this.totalLostOpponents})`],
      datasets: [
        {
          label: 'Opponents',
          data: [this.player.TotalBeatPlayersCount, this.totalLostOpponents],
          //backgroundColor: Object.values(Utils.CHART_COLORS),
        }
      ]
    };

    this.opponentChart = new Chart("OpponentChart", {
      type: 'pie', //this denotes tha type of chart

      data: data,
      options: {
        responsive:true,
      }
      
    });
  }
}
