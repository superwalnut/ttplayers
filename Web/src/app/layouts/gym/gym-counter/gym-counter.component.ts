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
      count:'22776+',
      img:'assets/images/gym/counter/happy-icon.png',
      type:'TT Players'
    },
    {
      count:'18559+',
      img:'assets/images/gym/counter/award-icon.png',
      type:'TT Events'
    },
    {
      count:'1.2m+',
      img:'assets/images/gym/counter/project-icon.png',
      type:'Matches Played'
    },
    {
      count:'7511+',
      img:'assets/images/gym/counter/work-icon.png',
      type:'Active Players'
    }]

}
