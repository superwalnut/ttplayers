import { Component, Input } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubSetup } from 'src/app/models/club-setup';

@Component({
  selector: 'app-opening-hours',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.scss']
})
export class OpeningHoursComponent {
  @Input() club:Club
  @Input() clubSetup:ClubSetup

}
