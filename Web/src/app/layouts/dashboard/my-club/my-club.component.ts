import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClubAutoComplete } from 'src/app/models/club-autocomplete';
import { User } from 'src/app/models/user';
import { UserClub } from 'src/app/models/user-club';
import { AuthService } from 'src/app/service/auth.service';
import { UserClubService } from 'src/app/service/user-club.service';

@Component({
  selector: 'app-my-club',
  templateUrl: './my-club.component.html',
  styleUrls: ['./my-club.component.scss']
})
export class MyClubComponent implements OnInit{  
  showEmptyResult:boolean = false;
  selectedClub:ClubAutoComplete; // profile selected from the autocomplete
  user:User; // logged in user

  clubs:UserClub[];
  
  constructor(public authService: AuthService, 
    private toastrService: ToastrService,
    private userClubService:UserClubService) {    
  }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
    this.userClubService.getUserClubs(this.user.Id).subscribe(x=>{
      this.clubs = x;

      if(this.clubs.length>0){
        this.showEmptyResult = false;
      } else {
        this.showEmptyResult = true;
      }

    });
  }

  handleClubAutoCompleteAction(club:ClubAutoComplete) {
    console.log('club selected', club);
    this.selectedClub = club;
  }

  saveClub() {
    console.log('selected', this.selectedClub);
    const userClub = {
      UserId: this.user.Id,
      ClubId: this.selectedClub.ClubId,
      Name: this.selectedClub.Name,
      Nickname: this.selectedClub.Nickname,
      City: this.selectedClub.City,
      State: this.selectedClub.State
    } as UserClub;
    this.userClubService.saveUserClub(this.user.Id, userClub).then(x=>{
      this.toastrService.success(`Added ${this.selectedClub.Nickname} club to your account.`);

    }).catch(err =>{
      this.toastrService.error(`Failed to add ${this.selectedClub.Nickname} to your account.`);
    });
  }

}
