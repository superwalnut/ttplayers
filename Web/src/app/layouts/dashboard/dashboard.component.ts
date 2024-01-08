import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from 'src/app/models/user';
import { FormGroup } from '@angular/forms';
import { UserProfileService } from 'src/app/service/user-profile.service';
import { PlayerAutoComplete } from 'src/app/models/player-autocomplete';
import { ToastrService } from 'ngx-toastr';
import { Profile } from 'src/app/models/profile';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/service/player.service';
import { FriendService } from 'src/app/service/friend.service';
import { of, switchMap, zip } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  user:User;
  completedProfile:Profile = null; // try to load this from DB
  player:Player; // once completed the profile, player will be populated with paired Rating Central Player

  constructor(public authService: AuthService, 
    private toastrService: ToastrService, 
    private playerService:PlayerService,
    private profileService:UserProfileService,
    private commonService:CommonService
    ) { }
    
  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfile(this.user.Id).pipe(
      switchMap(profile=>{
        if(profile){
          this.completedProfile = profile;
          console.log('profile', this.completedProfile);
          return this.playerService.getPlayer(profile.PlayerId);
        }
        else {
          return of(null);
        }
      })).subscribe(player=>{
        console.log('player', player);

        if(!player)
          return;

        this.player = player;
    });
  }

  resendEmailVerify() {
    this.authService.sendEmailVerification().then(x=>{
      this.toastrService.show('Verification email has been sent again, please check your inbox.');
    });
  }

  convertNameSlug(player:Player)
  {
    return this.commonService.convertToSlug(player.FullName);
  }
}
