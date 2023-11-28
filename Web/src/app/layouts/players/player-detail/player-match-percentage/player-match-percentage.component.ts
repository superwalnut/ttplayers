import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import Chart from 'chart.js/auto';
import { Statistics } from 'src/app/models/statistics';

@Component({
  selector: 'app-player-match-percentage',
  templateUrl: './player-match-percentage.component.html',
  styleUrls: ['./player-match-percentage.component.scss']
})
export class PlayerMatchPercentageComponent {
  @Input() player:Player;
  @Input() stats: Statistics;
  
  public matchPlayedchart: any;
  labels = ["<100","100-200", "200-300", "300-400", "400-500", "500-600", "600-700", "700-800", "800-900", "900-1000", "1000+"];
  values = [];
  bgColor = [];

  playerBand:number;

  totalPlayer:number = 0;
  totalPlayerPercent:number;

  ngOnInit(): void {
    console.log('match played stats', this.stats);
    
    this.values =  [
      this.stats.MatchPlayedGroups["0"], 
      this.stats.MatchPlayedGroups["100"], 
      this.stats.MatchPlayedGroups["200"], 
      this.stats.MatchPlayedGroups["300"], 
      this.stats.MatchPlayedGroups["400"], 
      this.stats.MatchPlayedGroups["500"],
      this.stats.MatchPlayedGroups["600"],
      this.stats.MatchPlayedGroups["700"],
      this.stats.MatchPlayedGroups["800"],
      this.stats.MatchPlayedGroups["900"],
      this.stats.MatchPlayedGroups["1000"]
    ];

    this.playerBand = this.getBand(this.player.TotalPlayedMatches);
    console.log('band', this.playerBand);
    console.log('group', this.values[this.playerBand]);

    this.totalPlayer = 0;
    for(var i=0;i<this.playerBand;i++){
      this.totalPlayer += this.values[i];
    }

    this.totalPlayerPercent = this.totalPlayer / this.stats.TotalPlayerCount;

    this.bgColor = [];
    for(var i =0;i<11;i++){
      if(this.playerBand == i){
        this.bgColor.push('red');
      }
      else {
        this.bgColor.push('blue');
      }
    }

    this.createChart(this.labels, this.values, this.bgColor);
  }

  createChart(labels:string[], values:any[], bgColor:string[]){
  
    this.matchPlayedchart = new Chart("MatchPlayedChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: labels, 
	       datasets: [
          {
            label: "Players",
            data: values,
            backgroundColor: bgColor
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  getBand(count:number) {
    const band = count/100;
    return Math.ceil(band) - 1;
  }

}
