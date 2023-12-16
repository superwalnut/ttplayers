import { Component, Input, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubSetup } from 'src/app/models/club-setup';

@Component({
  selector: 'app-our-coaches',
  templateUrl: './our-coaches.component.html',
  styleUrls: ['./our-coaches.component.scss']
})
export class OurCoachesComponent implements OnInit{
  @Input() club:Club
  @Input() clubSetup:ClubSetup

  ngOnInit(): void {
  }
  
  trainercarousel = [
    { 
     img:"assets/images/gym/trainers/1.jpg"
    },
    { 
      img:"assets/images/gym/trainers/2.jpg"
    },
    { 
      img:"assets/images/gym/trainers/3.jpg"
    },
    { 
      img:"assets/images/gym/trainers/4.jpg"
    },
    { 
      img:"assets/images/gym/trainers/5.jpg"
    },
    { 
      img:"assets/images/gym/trainers/3.jpg"
    }
  ]

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
