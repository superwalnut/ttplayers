import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../../service/player.service';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gym-header',
  templateUrl: './gym-header.component.html',
  styleUrls: ['./gym-header.component.scss']
})
export class GymHeaderComponent implements OnInit {
  searchTerm:string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/players', this.searchTerm]);
  }

}
