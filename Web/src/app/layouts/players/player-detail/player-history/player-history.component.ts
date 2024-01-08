import { Component, Input } from '@angular/core';
import { Match } from 'src/app/models/match';
import { Player } from 'src/app/models/player';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-player-history',
  templateUrl: './player-history.component.html',
  styleUrls: ['./player-history.component.scss']
})
export class PlayerHistoryComponent {
  @Input() player: Player;
  @Input() matchesByEvent: { [eventId: string]: Match[] } = {};
  
  maxSets:number = 7;

  constructor(private commonService:CommonService) {
  }

  
  getEventName(eventId:string) {
    return this.matchesByEvent[eventId][0].EventName;
  }

  getEventDate(eventId:string){
    return this.matchesByEvent[eventId][0].MatchDate;
  }

  getEventIds() {
    var keys = Object.keys(this.matchesByEvent);
    const sortedArray = keys.sort((a, b) => b.localeCompare(a));
    return sortedArray;
  }

  getMatchOpponentPlayerName(match:Match) {
    if(match.WinnerId == this.player.Id){
      // I am winner
      return match.LoserName;
    }
    if(match.LoserId == this.player.Id){
      // I am loser
      return match.WinnerName;
    }
  }

  getMatchOpponentPlayerId(match:Match) {
    if(match.WinnerId == this.player.Id){
      // I am winner
      return match.LoserId;
    }
    if(match.LoserId == this.player.Id){
      // I am loser
      return match.WinnerId;
    }
  }

  getPlayerSetWins(match:Match) {
    if(match.WinnerId == this.player.Id){
      // I am winner
      return match.WinnerSetWins;
    }
    if(match.LoserId == this.player.Id){
      // I am loser
      return match.LoserSetWins;
    }
  }

  getOpponentSetWins(match:Match) {
    if(match.WinnerId == this.player.Id){
      // Opponent is loser
      return match.LoserSetWins;
    }
    if(match.LoserId == this.player.Id){
      // Opponent is winner
      return match.WinnerSetWins;
    }
  }

  getPlayerSetScores(match:Match) {
    var sets = [];
    if(match.WinnerId == this.player.Id){
      // I am winner
      for(var i=0;i<this.maxSets;i++){
        if(match.WinnerSetScores && i < match.WinnerSetScores.length)
        {
          sets.push(match.WinnerSetScores[i]);
        } else {
          sets.push(-1);
        }
      }
    }
    if(match.LoserId == this.player.Id){
      // I am loser
      for(var i=0;i<this.maxSets;i++){
        if(match.LoserSetScores && i < match.LoserSetScores.length)
        {
          sets.push(match.LoserSetScores[i]);
        } else {
          sets.push(-1);
        }
      }
    }
    return sets;
  }

  getOpponentSetScores(match:Match) {
    var sets = [];
    if(match.WinnerId == this.player.Id){
      // Opponent is loser
      for(var i=0;i<this.maxSets;i++){
        if(match.LoserSetScores && i < match.LoserSetScores.length)
        {
          sets.push(match.LoserSetScores[i]);
        } else {
          sets.push(-1);
        }
      }
    }

    if(match.LoserId == this.player.Id){
      // Opponent is winner
      for(var i=0;i<this.maxSets;i++){
        if(match.WinnerSetScores && i < match.WinnerSetScores.length)
        {
          sets.push(match.WinnerSetScores[i]);
        } else {
          sets.push(-1);
        }
      }
    }
    return sets;
  }

  isPlayerWinner(match:Match){
    if(match.WinnerId == this.player.Id){
      // I am winner
      return true;
    }
    if(match.LoserId == this.player.Id){
      // I am loser
      return false;
    }
  }

  getPlayerWinnerClass(match:Match) {
    if(this.isPlayerWinner(match))
      return "win";

    return "";
  }
  
  isOpponentWinner(match:Match){
    if(match.WinnerId == this.player.Id){
      // I am winner
      return false;
    }
    if(match.LoserId == this.player.Id){
      // I am loser
      return true;
    }
  }

  getOpponentWinnerClass(match:Match) {
    if(this.isOpponentWinner(match))
      return "win";

    return "";
  }

  getPlayerPointChange(match:Match) {
    if(this.isPlayerWinner(match))
    {
      return match.WinnerDelta>0?'+'+match.WinnerDelta:0;
    }
    else {
      return match.LoserDelta;
    }
  }

  getOpponentPointChange(match:Match) {
    if(this.isOpponentWinner(match))
    {
      return match.WinnerDelta>0?'+'+match.WinnerDelta:0;
    }
    else {
      return match.LoserDelta;
    }
  }

  getOpponentRating(match:Match) {
    if(this.isOpponentWinner(match)){
      return `${match.LoserOpponentMean}±${match.LoserOpponentStDev}`;
    } else {
      return `${match.WinnerOpponentMean}±${match.WinnerOpponentStDev}`;
    }
  }

  getOpponentNameSlug(match:Match)
  {
    var name="";
    if(match.WinnerId == this.player.Id){
      // I am winner
      name = match.LoserName;
    }
    if(match.LoserId == this.player.Id){
      // I am loser
      name = match.WinnerName;
    }

    return this.commonService.convertToSlug(name);
  }
}
