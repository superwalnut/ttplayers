import { Component, Input } from '@angular/core';
import { Club } from 'src/app/models/club';

@Component({
  selector: 'app-club-profile-about-us',
  templateUrl: './club-profile-about-us.component.html',
  styleUrls: ['./club-profile-about-us.component.scss']
})
export class ClubProfileAboutUsComponent {
  @Input() club:Club

  claimClub() {

  }
}
