import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './../../../service/statistics.service';
import { Statistics } from 'src/app/models/statistics';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { GlobalConstants } from 'src/app/service/global.constants';

@Component({
  selector: 'app-gym-counter',
  templateUrl: './gym-counter.component.html',
  styleUrls: ['./gym-counter.component.scss']
})
export class GymCounterComponent implements OnInit {
  stats:Statistics;
  counter:any;

  constructor(private statsService:StatisticsService) { }

  ngOnInit() {
    this.statsService.getLatest().subscribe(x=>{
      this.stats = x;
      this.setCounters(x.TotalPlayerCount, x.TotalEventCount, x.TotalMatchCount, x.ActivePlayerCount);
    });
  }

  setCounters(players:number, events:number, matches:number, activePlayers:number) {
    var matchRound = Math.round(matches/1000000 * 100) / 100;
    this.counter = [
      {
        count:`${players}+`,
        img:'assets/images/gym/counter/happy-icon.png',
        type:'TT Players'
      },
      {
        count:`${events}+`,
        img:'assets/images/gym/counter/award-icon.png',
        type:'TT Events'
      },
      {
        count:`${matchRound}m+`,
        img:'assets/images/gym/counter/project-icon.png',
        type:'Matches Played'
      },
      {
        count:`${activePlayers}+`,
        img:'assets/images/gym/counter/work-icon.png',
        type:'Active Players'
      }];
  }
}
