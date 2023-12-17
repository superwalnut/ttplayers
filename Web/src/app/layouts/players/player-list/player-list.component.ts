import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { Statistics } from 'src/app/models/statistics';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { PlayerService } from 'src/app/service/player.service';
import { StatisticsService } from 'src/app/service/statistics.service';
import { GlobalConstants } from 'src/app/service/global.constants';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  keyword:string = '';
  state:string = '';
  showNoResult:boolean = false;

  showInstruction:boolean = false;

  pageSize:number = 10;

  statePageSize:number = 30;
    
  lastPlayer:Player = null;

  stats:Statistics; // use for statistics data for sidebar

  constructor(private playerService:PlayerService, private route: ActivatedRoute, private router:Router, private statsService:StatisticsService, private lsService:LocalstorageService) {
  }

  ngOnInit() {
      this.keyword = this.route.snapshot.params.keyword;
      this.state = this.route.snapshot.queryParams.state;

      if(this.keyword || this.state){
        this.search();
      } else {
        this.showInstruction = true;
      }

      this.statsService.getLatest().subscribe(x=>{
        this.stats = x;
      });
  }

  selectState(val:string){
    this.state = val;
  }
  
  search() {
    this.showInstruction = false;
    console.log('keyword', this.keyword);
    console.log('state', this.state);

    const trimKeyword = this.keyword??"".trim();

    // if there is no keyword or state, not perform search
    if(!trimKeyword && !this.state){
      this.showNoResult = true;
      return;
    }

    const isPlayerId = this.isNumber(trimKeyword);
    if(isPlayerId) {
      this.playerService.getPlayer(trimKeyword).subscribe(x=>{
        if(x) {
          this.players = [ x ];
          this.showNoResult = false;
        } else {
          this.players = [];
          this.showNoResult = true;
        }

        this.lastPlayer = null;
      });
    } else {      
      if(trimKeyword) {
        this.playerService.searchPlayerByName(trimKeyword, this.state, this.pageSize).subscribe(players => {
          console.log(this.players);
    
          if(!players || players.length<=0){
            this.players = [];
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
      } else {
        // only search by state
        console.log('search by state?', this.state);
        this.playerService.searchByState(this.state, this.statePageSize).subscribe(players=>{
          console.log(this.players);
    
          if(!players || players.length<=0){
            this.players = [];
            this.showNoResult = true;
            this.lastPlayer = null;
          } else {
            this.showNoResult = false;
            this.players = players;
            this.lastPlayer = players[players.length-1];
          }
    
          if(players.length<this.statePageSize){
            this.lastPlayer = null;
          }

        });        
      }
    }
  }

  loadMorePlayers() {
    if(this.keyword) {
      this.playerService.searchPlayerByNameWithPaging(this.keyword, this.state, this.pageSize, this.lastPlayer).subscribe(players =>{
        console.log('keyword response with paging', players);
  
        if(players.length<=0){
          this.lastPlayer = null;
        } else {
          players.forEach((p, index) => {
            this.players.push(p);
          });
    
          this.lastPlayer = players[players.length-1];
        }
      });
    } else {
      this.playerService.searchByStateWithPaging(this.state, this.statePageSize, this.lastPlayer).subscribe(players =>{
        console.log('state response with paging', players);
  
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

  isNumber(value?: string | number): boolean
  {
    return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
  }
}

