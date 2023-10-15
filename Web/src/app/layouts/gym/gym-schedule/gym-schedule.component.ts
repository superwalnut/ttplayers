import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym-schedule',
  templateUrl: './gym-schedule.component.html',
  styleUrls: ['./gym-schedule.component.scss']
})
export class GymScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  schedulecarousel = [
    { 
      tagLine1:"#1 Day Training",
      tagLine2:"Monday",
      description1:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      description2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    { 
      tagLine1:"#1 Day Training",
      tagLine2:"Monday",
      description1:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      description2:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
  ]
  
  schedulecarouselOptions= {
    items: 1,
    margin: 0,
    dots: true,
    nav: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
  }

}
