import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerHistory, PlayerHistoryEntry } from 'src/app/models/player-history';
import { PlayerService } from 'src/app/service/player.service';
import { MatchService } from './../../../service/match.service';
import { Match } from 'src/app/models/match';
import { PlayerMatchEvent } from 'src/app/models/player-match-event';
import { ClubService } from './../../../service/club.service';
import { SndttaTeamService } from './../../../service/sndtta-team.service';
import { Club } from 'src/app/models/club';
import { Team } from 'src/app/models/team';
import { TeamPlayer } from 'src/app/models/team-player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})

export class PlayerDetailComponent implements OnInit {
  player:Player;
  //histories:PlayerHistoryEntry[];
  club:Club;
  teamPlayers:TeamPlayer[] = [];

  matchesByEvent: { [eventId: string]: Match[] } = {};

  keyword:string;

  lastMatch:Match = null;

  constructor(private route: ActivatedRoute,
    private title: Title, private playerService:PlayerService, private matchService:MatchService, private clubService:ClubService, private sndttaTeamService:SndttaTeamService) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    var playerId = this.route.snapshot.params.id;
    this.keyword = this.route.snapshot.queryParams.keyword;

    // load player info
    this.playerService.getPlayer(playerId).subscribe(player => {
      this.player = player;
      console.log(this.player);

      // this.playerService.getPlayerHistory(playerId).subscribe(history =>{
      //   if(history && history.History){
      //     this.histories = history.History;
      //   }
      // });

      // load matches info
      this.matchService.searchMatches(playerId).subscribe(matches =>{
        console.log('matches', matches);

        this.matchesByEvent = {};

        matches.forEach((match, index) => {
          if (!this.matchesByEvent[match.EventId]) {
            this.matchesByEvent[match.EventId] = [];
          }
          this.matchesByEvent[match.EventId].push(match);
        });

        this.lastMatch = matches[matches.length-1];
      });

      // load club info
      if(player.PrimaryClubId){
        this.clubService.getClub(player.PrimaryClubId).subscribe(club =>{
          this.club = club;
        });
      }

      // load team and team players
      if(player.Team) {
        this.sndttaTeamService.searchTeams(player.Team).subscribe(teams =>{
          for(var i=0;i<teams.length;i++){
            for(var j=0;j<teams[i].Players.length;j++){
              var player = teams[i].Players[j];

              // get all other team mates, other than yourself
              if(player && player.Id != this.player.Id){
                this.teamPlayers.push({
                  Id: player.Id,
                  Rating: player.Rating,
                  Team: teams[i].Id,
                  FullName: player.FullName.trim(),
                  FirstName: player.FirstName.trim(),
                  LastName: player.LastName.trim()
                });
              }
            }
          }
        });
      }
    });
  }

  loadMoreMatches() {
    console.log('click!');
    this.matchService.searchMatchesWithPaging(this.player.Id, this.lastMatch).subscribe(matches =>{
      console.log('response with paging', matches);

      if(matches.length<=0){
        this.lastMatch = null;
      }

      matches.forEach((match, index) => {
        if (!this.matchesByEvent[match.EventId]) {
          this.matchesByEvent[match.EventId] = [];
        }
        this.matchesByEvent[match.EventId].push(match);
      });

      this.lastMatch = matches[matches.length-1];
    });
  }

  toRating(player:Player)
  {
    return `${player.Rating}±${player.StDev}`;
  }

  totalPlayedTime(player:Player) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const timeDifference = today.getTime() - player.StartPlayingDate.toDate().getTime();
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const millisecondsInMonth = millisecondsInDay * 30.44; // Approximate average number of days in a month

    const years = Math.floor(timeDifference / (millisecondsInDay * 365));
    const months = Math.floor((timeDifference % (millisecondsInDay * 365)) / millisecondsInMonth);
    const days = Math.floor((timeDifference % millisecondsInMonth) / millisecondsInDay);

    let result = "";

    if (years > 0) {
      result += `${years} ${years === 1 ? 'Yr' : 'Yrs'}`;
    }

    if (months > 0) {
      if (result) {
        result += ", ";
      }
      result += `${months} ${months === 1 ? 'Mth' : 'Mths'}`;
    }

    // if (days > 0) {
    //   if (result) {
    //     result += ", ";
    //   }
    //   result += `${days} ${days === 1 ? 'day' : 'Days'}`;
    // }

    return result;
  }

  getDivision(player:Player){
    if(player.Division <= 0){
      return "";
    }

    if(player.Division == 99) {
      return "Premier";
    } else{
      return `Div ${player.Division}`;
    }
  }

  toInitials(player:Player)
  {
      const firstInitial = player.FirstName.charAt(0);
      const lastInitial = player.LastName.charAt(0);
      return `${firstInitial}${lastInitial}`;
  }
}
