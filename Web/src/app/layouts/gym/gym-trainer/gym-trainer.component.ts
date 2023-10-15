import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym-trainer',
  templateUrl: './gym-trainer.component.html',
  styleUrls: ['./gym-trainer.component.scss']
})
export class GymTrainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  trainercarousel = [
    { 
     img:"assets/images/gym/traniers/1.jpg"
    },
    { 
      img:"assets/images/gym/traniers/2.jpg"
    },
    { 
      img:"assets/images/gym/traniers/3.jpg"
    },
    { 
      img:"assets/images/gym/traniers/4.jpg"
    },
    { 
      img:"assets/images/gym/traniers/5.jpg"
    },
    { 
      img:"assets/images/gym/traniers/3.jpg"
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
