import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  keyword:string;
  state:string;
  showNoResult:boolean = false;
  pageSize:number = 10;
    
  lastPlayer:Player = null;

  constructor(private playerService:PlayerService, private route: ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
      var keyword = this.route.snapshot.params.keyword;
      if(keyword){
        this.keyword = keyword;
        this.search();
      }
  }

  selectState(val:string){
    this.state = val;
  }
  
  search() {
    console.log(this.keyword);

    this.playerService.searchPlayerByName(this.keyword, this.state, this.pageSize).subscribe(players => {
      console.log(this.players);

      if(!players || players.length<=0){
        this.showNoResult = true;
        this.lastPlayer = null;
      } else {
        this.showNoResult = false;
        this.players = players;
        this.lastPlayer = players[players.length-1];
      }

      if(players.length<this.pageSize){
        this.lastPlayer = null;
      }
    });
  }

  loadMorePlayers() {
    this.playerService.searchPlayerByNameWithPaging(this.keyword, this.state, this.pageSize, this.lastPlayer).subscribe(players =>{
      console.log('response with paging', players);

      if(players.length<=0){
        this.lastPlayer = null;
      } else {
        players.forEach((p, index) => {
          this.players.push(p);
        });
  
        this.lastPlayer = players[players.length-1];
      }
    });

  }

  
}

