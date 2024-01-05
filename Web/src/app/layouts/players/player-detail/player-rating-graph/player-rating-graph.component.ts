import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-player-rating-graph',
  templateUrl: './player-rating-graph.component.html',
  styleUrls: ['./player-rating-graph.component.scss']
})
export class PlayerRatingGraphComponent implements OnInit{
  @Input() player:Player;
  ratingChart: any;

  constructor() {
    
  }

  ngOnInit(): void {
    this.createChart();
  }

  toRating(player:Player)
  {
    return `${player.Rating}±${player.StDev}`;
  }

  toHighestRating(player:Player){
    return `${player.HighestRating}±${player.HighestRatingStDev}`;
  }

  createChart(){
    if(!this.player.RatingChangeEveryHalfYearHistory){
      return;
    }

    console.log('ratings', this.player.RatingChangeEveryHalfYearHistory);
    var labels = this.player.RatingChangeEveryHalfYearHistory.map(x=>x.Period);
    var ratings = this.player.RatingChangeEveryHalfYearHistory.map(x=>x.Rating);

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Ratings',
          data: ratings,
          //backgroundColor: Object.values(Utils.CHART_COLORS),
        }
      ]
    };

    this.ratingChart = new Chart("RatingChart", {
      type: 'line', //this denotes tha type of chart

      data: data,
      options: {
        responsive:true,
      }
      
    });
  }
}
