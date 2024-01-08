import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-player-list-tile',
  templateUrl: './player-list-tile.component.html',
  styleUrls: ['./player-list-tile.component.scss']
})
export class PlayerListTileComponent implements OnInit{

  @Input() player:Player;
  @Input() keyword:string;
  @Input() state:string;

  lastPlayed:Date;

  constructor(private commonService:CommonService) {
    
  }

  ngOnInit(): void {
    this.lastPlayed = this.commonService.convertTimeStampToDate(this.player.LastPlayed);
  }

  toInitials(player:Player)
  {
      const firstInitial = player.FirstName.charAt(0);
      const lastInitial = player.LastName.charAt(0);
      return `${firstInitial}${lastInitial}`;
  }

  toRating(player:Player)
  {
    return `${player.Rating}±${player.StDev}`;
  }

  toDivision(player:Player)
  {
    switch(player.Division){
      case 0:
        return "";
      case 1:
        return "Div 1";
      case 2:
        return "Div 2";
      case 3:
        return "Div 3";
      case 4:
        return "Div 4";
      case 5:
        return "Div 5";
      case 99:
        return "Premier";
    }
  }

  convertNameSlug(player:Player)
  {
    return this.commonService.convertToSlug(player.FullName);
  }
}
