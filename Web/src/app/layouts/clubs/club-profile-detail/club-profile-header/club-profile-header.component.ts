import { Component, Input } from '@angular/core';
import { Club } from 'src/app/models/club';

@Component({
  selector: 'app-club-profile-header',
  templateUrl: './club-profile-header.component.html',
  styleUrls: ['./club-profile-header.component.scss']
})
export class ClubProfileHeaderComponent {
  @Input() club:Club

  toAddress() {
    return `${this.club.Address1} ${this.club.Address2}, ${this.club.City} ${this.club.State} ${this.club.PostalCode}`;
  }
}
