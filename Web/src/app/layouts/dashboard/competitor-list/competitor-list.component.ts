import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { of, switchMap, zip } from 'rxjs';
import { Player } from 'src/app/models/player';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { CompetitorService } from 'src/app/service/competitor.service';
import { PlayerService } from 'src/app/service/player.service';
import { UserProfileService } from 'src/app/service/user-profile.service';

@Component({
  selector: 'app-competitor-list',
  templateUrl: './competitor-list.component.html',
  styleUrls: ['./competitor-list.component.scss']
})
export class CompetitorListComponent {
  showEmptyResult:boolean = false;
  competitorPlayers:Player[];
  profile:Profile = null; // try to load this from DB
  player:Player; // once completed the profile, player will be populated with paired Rating Central Player
  user:User; // logged in user

  constructor(public authService: AuthService,
    private profileService:UserProfileService, 
    private playerService:PlayerService,
    private competitorService:CompetitorService,
    private toastrService:ToastrService
    ) {
  }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();

    this.loadProfileAndCompetitors();
  }

  loadProfileAndCompetitors() {
    this.profileService.getProfile(this.user.Id)
    .pipe(
      switchMap(profile=>{
          if(!profile)
            return zip(of(null), this.competitorService.getCompetitors(this.user.Id));
    
          this.profile = profile;
          console.log('profile', profile);
          return zip(this.playerService.getPlayer(profile.PlayerId), this.competitorService.getCompetitors(this.user.Id));
        }),
        switchMap(([player, competitors])=>{
          this.player = player;
          console.log('player', player);
  
          const competitorPlayerIds = competitors.map(f => f.CompetitorPlayerId);
            // load players by competitor-player-IDs
          return zip(of(player), this.playerService.getPlayerByPlayerIdList(competitorPlayerIds));
        })
      ).subscribe(([player, players])=>{
        console.log('mePlayer', player);
        console.log('players', players);

        if(!players || players.length<=0){
          this.showEmptyResult = true;
          return;
        } 
          
        this.showEmptyResult = false;

        this.competitorPlayers = [];
        if(player){
          players.push(player);
        }

        var sorted = this.sortPlayersByRating(players);
        this.competitorPlayers = sorted;
        
        
    });
  }
  
  remove_competitor(player:Player) {
    const competitorId = `${this.user.Id}-${player.Id}`;
    this.competitorService.removeCompetitor(competitorId).then(x=>{
      // remove from local list
      const index = this.competitorPlayers.findIndex(p => p.Id == player.Id);
      if (index !== -1) {
        this.competitorPlayers.splice(index, 1);
      }

      this.toastrService.show(`${player.FullName} is removed from competitors list`);
    });
    console.log('remove', player.Id);
  }

  sortPlayersByRating(items:Player[]): Player[] {
    // Use the sort method to sort players by rating
    return items.sort((a, b) => b.Rating - a.Rating);
  }
}
