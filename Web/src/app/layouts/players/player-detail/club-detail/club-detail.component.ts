import { Component, Input } from '@angular/core';
import { Club } from 'src/app/models/club';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.scss']
})
export class ClubDetailComponent {
  @Input() clubs:Club[];
}
