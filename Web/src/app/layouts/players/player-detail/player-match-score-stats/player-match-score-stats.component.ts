import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js/auto';
import { MatchScoreStats } from 'src/app/models/match-score-stats';
import { Player } from 'src/app/models/player';


@Component({
  selector: 'app-player-match-score-stats',
  templateUrl: './player-match-score-stats.component.html',
  styleUrls: ['./player-match-score-stats.component.scss']
})
export class PlayerMatchScoreStatsComponent implements OnInit{
  @Input() player: Player;
  matchStats3Sets:MatchScoreStats[] = [];
  matchStats5Sets:MatchScoreStats[] = [];
  matchStats7Sets:MatchScoreStats[] = [];

  ngOnInit(): void {
    this.player.MatchScoreStats.forEach(x=>{
      if(x.TotalSets == 3){
        this.matchStats3Sets.push(x);
      }
      if(x.TotalSets == 5){
        this.matchStats5Sets.push(x);
      }
      if(x.TotalSets == 7){
        this.matchStats7Sets.push(x);
      }
    });

    this.matchStats3Sets = this.matchStats3Sets.slice().sort((a, b) => b.Score.localeCompare(a.Score));
    this.matchStats5Sets = this.matchStats5Sets.slice().sort((a, b) => b.Score.localeCompare(a.Score));
    this.matchStats7Sets = this.matchStats7Sets.slice().sort((a, b) => b.Score.localeCompare(a.Score));

    console.log('3',this.matchStats3Sets );
    console.log('5',this.matchStats5Sets );
    console.log('7',this.matchStats7Sets );
  }
}
