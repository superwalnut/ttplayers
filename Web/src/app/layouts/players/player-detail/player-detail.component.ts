import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})

export class PlayerDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }

}