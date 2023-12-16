import { Component, Input } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubSetup } from 'src/app/models/club-setup';

@Component({
  selector: 'app-club-summary',
  templateUrl: './club-summary.component.html',
  styleUrls: ['./club-summary.component.scss']
})
export class ClubSummaryComponent {
  @Input() club:Club
  @Input() clubSetup:ClubSetup

  counter = [
    {
      count:'1510',
      img:'assets/images/gym/counter/happy-icon.png',
      type:'Satisfied Customers'
    },
    {
      count:'1510',
      img:'assets/images/gym/counter/project-icon.png',
      type:'Projects Completed'
    },
    {
      count:'1510',
      img:'assets/images/gym/counter/work-icon.png',
      type:'Hours Worked'
    },
    {
      count:'1510',
      img:'assets/images/gym/counter/award-icon.png',
      type:'Awwards Winning'
    }]
}
