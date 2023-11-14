import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player-list-tile',
  templateUrl: './player-list-tile.component.html',
  styleUrls: ['./player-list-tile.component.scss']
})
export class PlayerListTileComponent {
  @Input() player:Player;
  @Input() keyword:string;

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
}
