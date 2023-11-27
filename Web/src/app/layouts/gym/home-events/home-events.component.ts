import { Component, OnInit } from '@angular/core';
import { TtEvent } from 'src/app/models/event';
import { EventService } from 'src/app/service/event.service';
import { Timestamp } from 'firebase/firestore';
import { LocalstorageService } from './../../../service/localstorage.service';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.scss']
})
export class HomeEventsComponent implements OnInit {
  images:any[] = [
    { src: "/assets/images/home/demo-1.jpg", title:"Detailed Players' Match History", description:""},
    { src: "/assets/images/home/demo-2.jpg", title:"Winning Rate & Ranking", description:""},
    { src: "/assets/images/home/demo-3.jpg", title:"Plays' Matches & Opponents", description:""},
    { src: "/assets/images/home/demo-4.jpg", title:"Match scores & sets Statistics", description:""}
  ];
  constructor(private eventService:EventService, private lsService:LocalstorageService) { 
  }

  ngOnInit() {
  }

  trainercarouselOptions= {
    center: true,
    loop: true,
    dots: true,
    margin: 0,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
  }

  

}
