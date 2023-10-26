import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerHistory, PlayerHistoryEntry } from 'src/app/models/player-history';
import { PlayerService } from 'src/app/service/player.service';
import { MatchService } from './../../../service/match.service';
import { Match } from 'src/app/models/match';
import { PlayerMatchEvent } from 'src/app/models/player-match-event';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})

export class PlayerDetailComponent implements OnInit {
  player:Player;
  histories:PlayerHistoryEntry[];
  //matches:Match[];

  matchesByEvent: { [eventId: string]: Match[] } = {};

  keyword:string;
  blogData=blogDetailDB.Details;

  constructor(private route: ActivatedRoute,
    private title: Title, private playerService:PlayerService, private matchService:MatchService) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    var playerId = this.route.snapshot.params.id;
    this.keyword = this.route.snapshot.queryParams.keyword;

    this.playerService.getPlayer(playerId).subscribe(player => {
      this.player = player;
      console.log(this.player);

      this.playerService.getPlayerHistory(playerId).subscribe(history =>{
        this.histories = history.History;
      });

      this.matchService.searchMatches(playerId).subscribe(matches =>{
        console.log('matches', matches);

        matches.forEach((match) => {
          if (!this.matchesByEvent[match.EventId]) {
            this.matchesByEvent[match.EventId] = [];
          }
          this.matchesByEvent[match.EventId].push(match);
        });

        console.log('matchesByEvent', this.matchesByEvent);

        //this.matches = m;
      });
    });
  }

  getEventIds() {
    return Object.keys(this.matchesByEvent);
  }

  getEventName(eventId:string) {
    return this.matchesByEvent[eventId][0].EventName;
  }

  getEventDate(eventId:string){
    return this.matchesByEvent[eventId][0].MatchDate;
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
    if(match.WinnerId == this.player.Id){
      // I am winner
      return match.WinnerSetScores;
    }
    if(match.LoserId == this.player.Id){
      // I am loser
      return match.LoserSetScores;
    }
  }

  getOpponentSetScores(match:Match) {
    if(match.WinnerId == this.player.Id){
      // Opponent is loser
      return match.LoserSetScores;
    }
    if(match.LoserId == this.player.Id){
      // Opponent is winner
      return match.WinnerSetScores;
    }
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

  toRating(player:Player)
  {
    return `${player.Rating}±${player.StDev}`;
  }

}

export class blogDetailDB {
  static Details =
      {
          date:'July, 24th 2018',
          title:'Sandford Stadium Improvements',
          detail1:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          detail2:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          name:'Mark jkcno',
          like:'10',
          comment:', 50',
          section:'Comments :',
          commentSection:[
              {
                  Id:1,
                  commentImg:'assets/images/app_landing2/team/1.png',
                  commentName:'That Guy',
                  commentDate:'Dec 16,2014',
                  commentDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                  commentReplayTag:'reply'        
              },
              {
                  Id:2,
                  commentImg:'assets/images/app_landing2/team/2.png',
                  commentName:'That Guy',
                  commentDate:'Dec 16,2014',
                  commentDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                  commentReplayTag:'reply'        
              },
              {
                  Id:3,
                  commentImg:'assets/images/app_landing2/team/3.png',
                  commentName:'That Guy',
                  commentDate:'Dec 16,2014',
                  commentDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                  commentReplayTag:'reply'        
              },
              {
                  Id:4,
                  commentImg:'assets/images/app_landing2/team/4.png',
                  commentName:'That Guy',
                  commentDate:'Dec 16,2014',
                  commentDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                  commentReplayTag:'reply'        
              }

          ]
          
      }
  }