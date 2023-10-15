import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym-testimonial',
  templateUrl: './gym-testimonial.component.html',
  styleUrls: ['./gym-testimonial.component.scss']
})
export class GymTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
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
