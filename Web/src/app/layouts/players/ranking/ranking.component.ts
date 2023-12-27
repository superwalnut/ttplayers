import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  gender:string = "M";
  state:string = "";
  pageSize:number = 23;
  loadMorePageSize:number = 20;
  rankings: Player[] = [];

  lastPlayer:Player = null;

  player1:Player;
  player2:Player;
  player3:Player;
 
  constructor(private playerService:PlayerService, private route:ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    if(this.route.snapshot.queryParams.gender){
      this.gender = this.route.snapshot.queryParams.gender;
    }

    if(this.route.snapshot.queryParams.state){
      this.state = this.route.snapshot.queryParams.state;
    }

    this.search();
  }

  search() {
    this.player1 = null;
    this.player2 = null;
    this.player3 = null;
    this.rankings = [];
    
    this.playerService.getRankings(this.gender, this.state, this.pageSize).subscribe(x=>{      
      if(x.length<=0){
        this.lastPlayer = null;
      } else {
          this.lastPlayer = x[x.length-1];
      }

      if(x.length>3){
        this.player1 = x[0];
        this.player2 = x[1];
        this.player3 = x[2];
      }

      if(x.length<this.pageSize){
          this.lastPlayer = null;
      }

      this.rankings = [];
      x.forEach((item, index)=>{
        if(index>2){
          this.rankings.push(item);
        }
      });
    });
  }

  loadMorePlayers() {
    this.playerService.getRankingsWithPaging(this.gender, this.state, this.loadMorePageSize, this.lastPlayer).subscribe(players=>{
      if(players.length<=0){
        this.lastPlayer = null;
      }

      players.forEach((p, index) => {
        this.rankings.push(p);
      });

      this.lastPlayer = players[players.length-1];
    });
  }

  selectGender(gender:string) {
    this.gender = gender;
    this.search();
    this.router.navigate(['/rankings/'], {queryParams: { gender: this.gender, state: this.state }});
  }

  selectState(state:string) {
    this.state = state;
    this.search();
    this.router.navigate(['/rankings/'], {queryParams: { gender: this.gender, state: this.state }});
  }

  displayBreadcrumb() {
    if(this.gender == "M") {
      if(this.state) {
        return `${this.state} Men's`;
      } else {
        return "National Men's";
      }
    }

    if(this.gender == "F"){
      if(this.state) {
        return `${this.state} Women's`;
      } else {
        return "National Women's";
      }
    }
  }
}
