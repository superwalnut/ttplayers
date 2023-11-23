import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym-copyright',
  templateUrl: './gym-copyright.component.html',
  styleUrls: ['./gym-copyright.component.scss']
})
export class GymCopyrightComponent implements OnInit {
  year:number;
  constructor() { }

  ngOnInit() {
    this.year = (new Date()).getFullYear();
  }

}
