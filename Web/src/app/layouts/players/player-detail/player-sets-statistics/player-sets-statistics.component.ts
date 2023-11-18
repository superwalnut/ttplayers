import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-player-sets-statistics',
  templateUrl: './player-sets-statistics.component.html',
  styleUrls: ['./player-sets-statistics.component.scss']
})
export class PlayerSetsStatisticsComponent implements OnInit{

  @Input() player: Player;
  public setsChart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
//    labels: ['First','Second','Third','Fourth','Fifth'],
 //   data: [this.player.WinRateFirstGame, this.player.WinRateSecondGame, this.player.WinRateThirdGame, this.player.WinRateFourthGame, this.player.WinRateFifthGame],

    this.setsChart = new Chart("SetsChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['First','Second','Third','Fourth','Fifth'], 
	       datasets: [
          {
            label: "Sets (Winning %)",
            data: [this.player.WinRateFirstGame * 100, this.player.WinRateSecondGame * 100, this.player.WinRateThirdGame * 100, this.player.WinRateFourthGame * 100, this.player.WinRateFifthGame * 100],
            backgroundColor: '#007bff'
          }
        ]
      },
      options: {
        scales: {
          y: {
            min:0,
            max:100
          }
        },
        responsive:true,
      }
      
    });
  }
}
