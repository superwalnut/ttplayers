import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-gym-footer',
  templateUrl: './gym-footer.component.html',
  styleUrls: ['./gym-footer.component.scss']
})
export class GymFooterComponent implements OnInit {
  versions:string;
  constructor() { }

  ngOnInit() {
    this.versions = environment.appVersion;
  }

}
