import { Component, Input, OnInit } from '@angular/core';
import { MatchScoreStats } from 'src/app/models/match-score-stats';
import Chart from 'chart.js/auto';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player-match-score-stats-item-three-sets',
  templateUrl: './player-match-score-stats-item-three-sets.component.html',
  styleUrls: ['./player-match-score-stats-item-three-sets.component.scss']
})
export class PlayerMatchScoreStatsItemThreeSetsComponent  implements OnInit{
  @Input() player:Player;
  @Input() matchStatsSets:MatchScoreStats[];
  chartName:string = "Sets3Chart";
  chart:any;

  totalMatches:number;

  ngOnInit(): void {
    if(this.matchStatsSets && this.matchStatsSets.length>0){
      const totalSum = this.matchStatsSets.reduce((acc, curr) => acc + curr.Count, 0);
      this.totalMatches = totalSum;
      
      const sets = this.matchStatsSets[0].TotalSets;
      this.chartName = `Sets${sets}Chart`;

      console.log('chartname',this.chartName);
      this.chart = this.createChart();
    }
  }

  createChart(){
    var labels = [];
    var data = [];
    var bg = [];

    console.log('create chart stats', this.matchStatsSets);

    this.matchStatsSets.forEach(x=>{
      labels.push(x.Score);
      data.push(x.Count);
      if(x.IsWin){
        bg.push('#007bff');
      } else {
        bg.push('#e83e8c');
      }
    });

    var mychart = new Chart(this.chartName, {
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

    return mychart;
  }
}

