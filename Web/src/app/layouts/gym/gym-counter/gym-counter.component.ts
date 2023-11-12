import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './../../../service/statistics.service';
import { Statistics } from 'src/app/models/statistics';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-gym-counter',
  templateUrl: './gym-counter.component.html',
  styleUrls: ['./gym-counter.component.scss']
})
export class GymCounterComponent implements OnInit {
  stats:Statistics;
  storageKey:string = 'stats-counter';
  counter:any;

  constructor(private statsService:StatisticsService, private lsService:LocalstorageService) { }

  ngOnInit() {
    const val = this.lsService.getItemWithExpiration(this.storageKey);
    if(val){
      this.stats = val;
      this.setCounters(this.stats.TotalPlayerCount, this.stats.TotalEventCount, this.stats.TotalMatchCount, this.stats.ActivePlayerCount);
    } else {
      this.statsService.getLatest().subscribe(x=>{
        if(x.length>0){
          this.stats = x[0];
          this.lsService.setItemWithExpiration('stats-counter', this.stats, 7);
          this.setCounters(this.stats.TotalPlayerCount, this.stats.TotalEventCount, this.stats.TotalMatchCount, this.stats.ActivePlayerCount);
        }
      });
    }
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
