import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym-header',
  templateUrl: './gym-header.component.html',
  styleUrls: ['./gym-header.component.scss']
})
export class GymHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  headercarousel = [
    { 
      tagLine1:"build your",
      tagLine2:"body more strong",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."    
    },
    { 
      tagLine1:"build your",
      tagLine2:"body more strong",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."    
    },  
  ]
  
  headercarouselOptions= {
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
  }
}
