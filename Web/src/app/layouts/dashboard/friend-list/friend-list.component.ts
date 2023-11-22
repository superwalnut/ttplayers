import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { of, switchMap, zip } from 'rxjs';
import { Player } from 'src/app/models/player';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { FriendService } from 'src/app/service/friend.service';
import { PlayerService } from 'src/app/service/player.service';
import { UserProfileService } from 'src/app/service/user-profile.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit{
  friendPlayers:Player[];
  profile:Profile = null; // try to load this from DB
  player:Player; // once completed the profile, player will be populated with paired Rating Central Player
  user:User; // logged in user

  constructor(public authService: AuthService,
    private profileService:UserProfileService, 
    private playerService:PlayerService,
    private friendService:FriendService,
    private toastrService:ToastrService
    ) {
  }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();

    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfile(this.user.Id).subscribe(profile=>{
      // do nothing if user has't setup their profile yet.
      console.log('profile', profile);
      if(!profile)
        return;

      this.profile = profile;
      this.loadYourselfAndFriends(profile.PlayerId);
    });
  }

  loadYourselfAndFriends(profilePlayerId:string) {
    // get user's friends
      this.playerService.getPlayer(profilePlayerId).pipe(
        switchMap(player=>{
          this.player = player;
          console.log('yourself player', this.player);
          return zip(of(player),this.friendService.getFriends(this.user.Id));
        }),
        switchMap(([player, friends])=>{
          console.log('friends', friends);
          const friendPlayerIds = friends.map(f => f.FriendPlayerId);
          // load players by friend-player-IDs
          return zip(of(player), this.playerService.getPlayerByPlayerIdList(friendPlayerIds));
        })
      ).subscribe(([mePlayer, players]) =>{
        console.log('mePlayer', mePlayer);
        console.log('friend-players', players);
        if(mePlayer){
          players.push(mePlayer);
        }
        var sorted = this.sortPlayersByRating(players);
        this.friendPlayers = sorted;
      });
  }

  remove_friend(player:Player) {
    const friendId = `${this.user.Id}-${player.Id}`;
    this.friendService.removeFriend(friendId).then(x=>{
      // remove from local list
      const index = this.friendPlayers.findIndex(p => p.Id == player.Id);
      if (index !== -1) {
        this.friendPlayers.splice(index, 1);
      }

      this.toastrService.show(`${player.FullName} is removed from friends list`);
    });
    console.log('remove', player.Id);
  }

  sortPlayersByRating(items:Player[]): Player[] {
    // Use the sort method to sort players by rating
    return items.sort((a, b) => b.Rating - a.Rating);
  }

  

}
