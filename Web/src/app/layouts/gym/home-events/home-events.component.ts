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
  state:string = "NSW";
  events:TtEvent[] = [];
  pageSize:number = 8;

  constructor(private eventService:EventService, private lsService:LocalstorageService) { 
    this.state = this.getLocalState();
    if(!this.state)
    {
      this.state = "NSW";
    }

    this.events = this.getLocalHomeEvents();
    if(!this.events || this.events.length<=0) {
      this.search();
    }
  }

  ngOnInit() {
  }

  toDisplayDate(evt:TtEvent){
    const date = new Date(evt.Date.seconds * 1000);
    return date;
  }

  getLocalState() {
    return this.lsService.getString('event-state');
  }

  setLocalHomeEvents() {
    this.lsService.setItemWithExpiration('home-events', this.events, 7);
  }

  getLocalHomeEvents() : TtEvent[]{
    var item = this.lsService.getItemWithExpiration('home-events');
    return item as TtEvent[];
  }

  search() {
    console.log('do search');
    this.eventService.searchEvents(this.state, this.pageSize).subscribe(x=>{
      this.events = x;
      this.setLocalHomeEvents();
    });
  }

  trainercarouselOptions= {
    center: true,
    loop: true,
    dots: true,
    margin: 0,
    responsive: {
        0: {
            items: 2,
            margin: 10
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
  }

  

}
