import { Component } from '@angular/core';

@Component({
  selector: 'app-club-profile-events',
  templateUrl: './club-profile-events.component.html',
  styleUrls: ['./club-profile-events.component.scss']
})
export class ClubProfileEventsComponent {
  events:string[] = ["Event 1", "Event 2", "Event 3", "Event 4", "Event 5"];

  claimClub() {

  }

  trainercarouselOptions= {
    center: true,
    loop: true,
    dots: true,
    margin: 0,
    responsive: {
        0: {
            items: 2,
            margin: 10
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
  }
}
