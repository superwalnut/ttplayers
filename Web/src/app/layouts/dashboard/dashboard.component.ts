import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from 'src/app/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfileService } from 'src/app/service/user-profile.service';
import { PlayerAutoComplete } from 'src/app/models/player-autocomplete';
import { ToastrService } from 'ngx-toastr';
import { Profile } from 'src/app/models/profile';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/service/player.service';
import { FriendService } from 'src/app/service/friend.service';
import { Friend } from 'src/app/models/friend';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  profileForm!: FormGroup;
  user:User;

  completedProfile:Profile; // try to load this from DB

  selectedPlayerProfile:PlayerAutoComplete; // profile selected from the autocomplete

  player:Player;

  friends:Friend[];

  firendPlayers:Player[];

  constructor(public authService: AuthService, 
    private toastrService: ToastrService, 
    private profileService:UserProfileService, 
    private playerService:PlayerService,
    private friendService:FriendService) { }
    
  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
    this.profileForm = new FormGroup({});

    this.profileService.getProfile(this.user.Id).subscribe(x=>{
      // do nothing if user has't setup their profile yet.
      if(x){
        this.completedProfile = x;
        // get the player if already has profile
        if(this.completedProfile) {
          this.playerService.getPlayer(this.completedProfile.PlayerId).subscribe(p=>{
            this.player = p;
            console.log('player', this.player);
            // get user's friends
            if(this.user.EmailVerified){
              this.friendService.getFriends(this.user.Id).subscribe(friends=>{
                this.friends = friends;
                console.log('friends', this.friends);

                const friendPlayerIds = this.friends.map(f => f.FriendPlayerId);
                // load players by friend-player-IDs
                this.playerService.getPlayerByPlayerIdList(friendPlayerIds).subscribe(x=>{
                  // push yourself to friend list too
                  x.push(this.player);

                  //get all friend players & sort fiend-players by Rating
                  this.firendPlayers = this.sortPlayersByRating(x);
                  console.log('friend players', x);
                });
              });
            }
          });
        }
      }
    });
  }

  saveProfile() {
    if(this.selectedPlayerProfile){
      const profile = {
        UserId: this.user.Id,
        PlayerId: this.selectedPlayerProfile.PlayerId,
        FullName: this.selectedPlayerProfile.FullName,
        FirstName: this.selectedPlayerProfile.FirstName,
        LastName: this.selectedPlayerProfile.LastName,
        State: this.selectedPlayerProfile.State,
        Gender: this.selectedPlayerProfile.Gender
      } as Profile;
      this.profileService.saveProfile(this.user.Id, profile).then(x=>{
        this.completedProfile = profile;
        this.toastrService.show('You have successfully paired your rating central player ID');
      });
    }
    else {
      this.toastrService.show('You must select a rating central player');
    }
  }

  sortPlayersByRating(items:Player[]): Player[] {
    // Use the sort method to sort players by rating
    return items.sort((a, b) => b.Rating - a.Rating);
  }

  handlePlayerAutoCompleteAction(profile:PlayerAutoComplete) {
    console.log('profile selected', profile);
    this.selectedPlayerProfile = profile;
  }

  resendEmailVerify() {
    this.authService.sendEmailVerification().then(x=>{
      this.toastrService.show('Verification email has been sent again, please check your inbox.');
    });
  }

}
