import { Component, Input } from '@angular/core';
import { Club } from 'src/app/models/club';

@Component({
  selector: 'app-club-profile-events',
  templateUrl: './club-profile-events.component.html',
  styleUrls: ['./club-profile-events.component.scss']
})
export class ClubProfileEventsComponent {
  @Input() club:Club

  
  users = [
    { 
      img:"assets/images/gym/testimonial/quote.png"
    },
    {
      img:"assets/images/gym/testimonial/quote.png"
    }
  ]
  
  testimonialCarouselOptions= {
    items: 1,
    margin: 0,
    dots: true,
    nav: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
  }


}
