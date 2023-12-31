import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/service/player.service';
import { MatchService } from './../../../service/match.service';
import { Match } from 'src/app/models/match';
import { ClubService } from './../../../service/club.service';
import { SndttaTeamService } from './../../../service/sndtta-team.service';
import { Club } from 'src/app/models/club';
import { TeamPlayer } from 'src/app/models/team-player';
import { Friend } from '../../../models/friend';
import { FriendService } from './../../../service/friend.service';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { StatisticsService } from 'src/app/service/statistics.service';
import { Statistics } from 'src/app/models/statistics';
import { Competitor } from './../../../models/competitor';
import { CompetitorService } from './../../../service/competitor.service';
import { CommonService } from 'src/app/service/common.service';
import { Gtag } from 'angular-gtag';
import { PlayerOpponentService } from './../../../service/player-opponent.service';
import { PlayerOpponents } from 'src/app/models/player-opponent';
import { of, switchMap, zip } from 'rxjs';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})

export class PlayerDetailComponent implements OnInit, OnDestroy {
  player:Player;
  clubs:Club[] = [];
  teamPlayers:TeamPlayer[] = [];
  matchesByEvent: { [eventId: string]: Match[] } = {};
  opponents:PlayerOpponents;
  
  keyword:string;
  state:string;
  referrer:string;

  lastMatch:Match = null;
  friend: Friend = null;
  loggedInUser: User = null;
  stats:Statistics = null; // get latest statistics
  competitor: Competitor = null;

  nameInitialSvg:any;

  active = 1; // tab

  constructor(private route: ActivatedRoute,
    private title: Title, 
    private playerService:PlayerService, 
    private matchService:MatchService, 
    private clubService:ClubService, 
    private sndttaTeamService:SndttaTeamService,
    private friendService:FriendService,
    private authService:AuthService,
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private competitorService:CompetitorService,
    private playerOpponentService:PlayerOpponentService,
    private statsService:StatisticsService,
    private commonService:CommonService,
    private gtag: Gtag,
    private meta: Meta
    ) { 
      var playerId = this.route.snapshot.params.id;
      this.title.setTitle(`Australian Table Tennis player - ${playerId} match history and statistics`);
      this.meta.addTags([
        {name: 'keywords', content: 'Australia, Table Tennis, Match History, Match Statistics'},
        {name: 'robots', content: 'index, follow'}
      ]);
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    var playerId = this.route.snapshot.params.id;    
    this.keyword = this.route.snapshot.queryParams.keyword;
    this.state = this.route.snapshot.queryParams.state;
    
    this.referrer = this.route.snapshot.queryParams.referrer;

    this.gtag.event('player_detail', { 'playerId': playerId });
    
    this.loggedInUser = this.authService.getLoggedInUser();

    if(this.loggedInUser){
      // load friend info
      this.friendService.getFriend(this.loggedInUser.Id, playerId).subscribe(f => {
        if(f){
          this.friend = f;
        }
      });

      // load competitor info
      this.competitorService.getCompetitor(this.loggedInUser.Id, playerId).subscribe(c =>{
        if(c)
        {
          this.competitor = c;
        }
      });
    }

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

    // load player opponents
    this.playerOpponentService.getPlayerOpponents(playerId).subscribe(opponents =>{
      this.opponents = opponents;
    });

    // load player info
    this.playerService.getPlayer(playerId)
    .pipe(
      switchMap(player=>{
        this.player = player;
        console.log(this.player);
  
        this.title.setTitle(`${player.State} Table Tennis player - ${player.FullName} :${playerId} match history and statistics`);
        this.meta.addTag({name: 'description', content: `${player.State} Table Tennis player - ${player.FullName} :${playerId} match history and statistics`});
  
        // get name initial svg
        this.nameInitialSvg = this.getSvg(player);
        
        const clubIds = player.ClubIds?player.ClubIds:[player.PrimaryClubId];
        const teamNames = player.Team;
        console.log('teamNames', teamNames);
        return zip(this.clubService.getClubByIds(clubIds), this.sndttaTeamService.searchTeams(teamNames));
      })
    ).subscribe(([clubs, teams]) => {
      // load clubs
      if(clubs){
        this.clubs = clubs;
      }

      // load team and team players
      if(teams){
        for(var i=0;i<teams.length;i++){
          for(var j=0;j<teams[i].Players.length;j++){
            var player = teams[i].Players[j];
  
            // get all other team mates, other than yourself
            if(player && player.Id != this.player.Id){
              this.teamPlayers.push({
                Id: player.Id,
                Rating: player.Rating,
                StDev: player.StDev,
                Team: teams[i].Id,
                FullName: player.FullName.trim(),
                FirstName: player.FirstName.trim(),
                LastName: player.LastName.trim(),
                Gender: player.Gender
              });
            }
          }
        }
      }
      
    });

    // load statistics
    this.statsService.getLatest().subscribe(x=>{
      this.stats = x;
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

  action_friend(content) {
    if(this.loggedInUser){
      // if user logged in, action this with his friend list
      console.log('add friend');

      if(this.friend != null){
        // which means this player is already your friend, then remove it from your friend list
        this.remove_friend();
      } else {
        // which means this player is NOT your friend, then add him to your friend list
        this.add_friend();
      }
    } else {
      // popup to show message and redirect to register/login page
      this.modalService.open(content, { centered: true });
    }
  }

  action_competitor(content) {
    if(this.loggedInUser){
      if(this.competitor != null) {
        this.remove_competitor();
      } else {
        this.add_competitor();
      }
    } else {
      // popup to show message and redirect to register/login page
      this.modalService.open(content, { centered: true });
    }
  }

  add_friend() {
    const friend = {
      Id: `${this.loggedInUser.Id}-${this.player.Id}`,
      UserId: this.loggedInUser.Id,
      FriendPlayerId: this.player.Id,
      FirstName: this.player.FirstName,
      LastName: this.player.LastName,
      FullName: this.player.FullName,
      Gender: this.player.Gender,
      State: this.player.State
    } as Friend;
    this.friendService.addFriend(friend).then(x=>{
      this.friend = friend;
      this.toastrService.success(`Added ${this.player.FullName} to your friends list`);
    });
  }

  remove_friend() {
    this.friendService.removeFriend(this.friend.Id).then(x=>{
      this.friend = null;
      this.toastrService.success(`Removed ${this.player.FullName} from your friends list`);
    });
  }

  add_competitor() {
    const competitor = {
      Id: `${this.loggedInUser.Id}-${this.player.Id}`,
      UserId: this.loggedInUser.Id,
      CompetitorPlayerId: this.player.Id,
      FirstName: this.player.FirstName,
      LastName: this.player.LastName,
      FullName: this.player.FullName,
      Gender: this.player.Gender,
      State: this.player.State
    } as Competitor;

    this.competitorService.addCompetitor(competitor).then(x=>{
      this.competitor = competitor;
      this.toastrService.success(`Added ${this.player.FullName} to your competitors list`);
    });
  }

  remove_competitor() {
    this.competitorService.removeCompetitor(this.competitor.Id).then(x=>{
      this.competitor = null;
      this.toastrService.success(`Removed ${this.player.FullName} from your competitors list`);
    });
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

  getSvg(player:Player) {
    return this.commonService.getNameInitialSvg(player, 0);
  }
}
