import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js/auto';
import { Player } from 'src/app/models/player';


@Component({
  selector: 'app-player-match-score-stats',
  templateUrl: './player-match-score-stats.component.html',
  styleUrls: ['./player-match-score-stats.component.scss']
})
export class PlayerMatchScoreStatsComponent implements OnInit{
  @Input() player: Player;
  public scoreChart: any;

  ngOnInit(): void {
    this.createChart();
  }
  
  createChart(){
    var labels = [];
    var data = [];
    var bg = [];

    this.player.MatchScoreStats.forEach(x=>{
      labels.push(x.Score);
      data.push(x.Count);
      if(x.IsWin){
        bg.push('#007bff');
      } else {
        bg.push('#e83e8c');
      }
    });

    this.scoreChart = new Chart("ScoreChart", {
      type: 'doughnut', //this denotes tha type of chart
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Scores',
            data: data,
            backgroundColor: bg
          }
        ],
      },
      options: {
        responsive:true,
      }
    });
  }
}
