import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-player-biography',
  templateUrl: './player-biography.component.html',
  styleUrls: ['./player-biography.component.scss']
})
export class PlayerBiographyComponent implements OnInit{
  @Input() player:Player;

  minGameRate:number;
  maxGameRate:number;

  startDate: Date;

  heOrShe:string;
  hisOrHer:string;
  himOrHer:string;

  constructor(private commonService:CommonService) {
    
  }

  ngOnInit(): void {
    var games = [ this.player.WinRateFirstGame, this.player.WinRateSecondGame, this.player.WinRateThirdGame, this.player.WinRateFourthGame, this.player.WinRateFifthGame ];
    var rates = games.sort((n1,n2)=> n1 - n2);
    this.minGameRate = rates[0];
    this.maxGameRate = rates[4]; 

    this.startDate = this.commonService.convertTimeStampToDate(this.player.StartPlayingDate);

    this.heOrShe = this.player.Gender == 'M'? "he" : "she";
    this.hisOrHer = this.player.Gender == 'M'? "his" : "her";
    this.himOrHer = this.player.Gender == 'M'? "him" : "her";

    console.log('date', this.startDate);
    console.log('timestamp', this.player.StartPlayingDate);
  }

  
}
