import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from 'firebase/firestore';
import { Player } from 'src/app/models/player';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-player-detail-basic-info',
  templateUrl: './player-detail-basic-info.component.html',
  styleUrls: ['./player-detail-basic-info.component.scss']
})
export class PlayerDetailBasicInfoComponent implements OnInit {
  @Input() player:Player;

  time:any;
  hasWtdRate:boolean;
  ratingDisplay:string;

  constructor(private commonService:CommonService) {
    
  }
  ngOnInit(): void {    
    this.time = this.commonService.totalPlayedTime(this.player);
    this.hasWtdRate = this.player.YearToDateWins+ this.player.YearToDateLoses > 0;
    this.ratingDisplay = this.toRating(this.player);
  }

    // display label methods
    toRating(player:Player)
    {
      return `${player.Rating}±${player.StDev}`;
    }
  
    toGenderRanking(player:Player) {
      if(player.Gender == "M"){
        return "(Men's)";
      }
  
      if(player.Gender == "F"){
        return "(Women's)";
      }
  
      return "";
    }
}
