import { Component, Input, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubSetup } from './../../../../models/club-setup';

@Component({
  selector: 'app-club-profile-about-us',
  templateUrl: './club-profile-about-us.component.html',
  styleUrls: ['./club-profile-about-us.component.scss']
})
export class ClubProfileAboutUsComponent implements OnInit {  
  @Input() club:Club
  @Input() clubSetup:ClubSetup

  aboutUs:string="Join us in celebrating the art of table tennis and unlocking the potential for every player, no matter their level of expertise. We're here to support and empower the table tennis community on their journey to excellence.";
  aboutUsImageUrl:string = "assets/images/gym/about-us.jpg";

  ngOnInit(): void {
    if(this.clubSetup?.AboutUs??""){
      this.aboutUs = this.clubSetup.AboutUs;
    }

    if(this.clubSetup.AboutUsImageUrl) {
      this.aboutUsImageUrl = this.clubSetup.AboutUsImageUrl;
    }
    
  }
}
