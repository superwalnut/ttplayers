import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerOpponent, PlayerOpponentMatch, PlayerOpponents } from 'src/app/models/player-opponent';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-player-all-opponents',
  templateUrl: './player-all-opponents.component.html',
  styleUrls: ['./player-all-opponents.component.scss']
})
export class PlayerAllOpponentsComponent {
  @Input() player:Player;
  @Input() opponents:PlayerOpponents;

  constructor(private commonService:CommonService) {
    
  }

  getPlayerScore(match:PlayerOpponentMatch)
  {
    if(this.player.Id == match.WinnerId){
      //I am the winner
      return match.WinnerSetWins;
    }
    if(this.player.Id == match.LoserId){
      //I am the loser
      return match.LoserSetWins;
    }
  }

  getOpponentPlayerScore(match:PlayerOpponentMatch)
  {
    if(this.player.Id != match.WinnerId){
      //Opponent is the winner
      return match.WinnerSetWins;
    }
    if(this.player.Id != match.LoserId){
      //Opponent is the loser
      return match.LoserSetWins;
    }
  }

  getPlayerWinnerClass(match:PlayerOpponentMatch) {
    if(this.player.Id == match.WinnerId){
      return "win";
    }

    return "";
  }

  getOpponentWinnerClass(match:PlayerOpponentMatch) {
    if(this.player.Id != match.WinnerId){
      return "win";
    }

    return "";
  }

  matchCountLabel(opponent:PlayerOpponent)
  {
    if(!opponent.Matches)
      return "";

    if(opponent.Matches.length==1){
      return "once";
    }

    if(opponent.Matches.length==2){
      return "twice";
    }

    if(opponent.Matches.length>2){
      return `${opponent.Matches.length} times`;
    }

    return "";
  }

  convertMatchDate(match:PlayerOpponentMatch) {
    return this.commonService.convertTimeStampToDate(match.MatchDate);
  }

  convertNameSlug(opponent:PlayerOpponent)
  {
    return this.commonService.convertToSlug(opponent.FullName);
  }
}
