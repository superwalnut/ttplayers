import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym-counter',
  templateUrl: './gym-counter.component.html',
  styleUrls: ['./gym-counter.component.scss']
})
export class GymCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
