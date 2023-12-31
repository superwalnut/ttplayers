import { Component } from '@angular/core';
import { EventService } from './../../../service/event.service';
import { TtEvent } from 'src/app/models/event';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  showEmptyResult:boolean = false;
  state:string = "";
  keyword:string = "";
  events:TtEvent[] = [];
  pageSize:number = 5;

  lastEvent:TtEvent = null;

  constructor(private eventService:EventService, private route: ActivatedRoute, private title:Title, private commonService:CommonService) {
    const state = this.route.snapshot.queryParams.state;
    if(state){
      this.state = state;
    } else {
      this.state = this.getLocalState();
    }

    if(!this.state)
    {
      this.state = "NSW";
    }

    this.search();
   }

  search() {
      this.events = [];
      this.setLocalState(this.state);
      this.eventService.searchEvents(this.keyword, this.state, this.pageSize).subscribe(x=>{
        this.events = x;
        
        if(x.length<=0){
          this.showEmptyResult = true;
          this.lastEvent = null;
        } else {
          this.lastEvent = x[x.length-1];
          this.showEmptyResult = false;
        }
      });
  }

  loadMoreEvents() {
    console.log('click!');
    this.eventService.searchEventsWithPaging(this.keyword, this.state, this.pageSize, this.lastEvent).subscribe(events =>{
      console.log('response with paging', events);

      if(events.length<=0){
        this.lastEvent = null;
      }

      events.forEach((evt, index) => {
        this.events.push(evt);
      });

      this.lastEvent = events[events.length-1];
    });
  }

   selectState(val:string){
      this.state = val;
   }

   setLocalState(val:string) {
      localStorage.setItem('event-state', val);
   }

   getLocalState() {
     return localStorage.getItem('event-state');
   }

   getEventBg(evt:TtEvent) {
    if(!evt.State){
      return `url(assets/images/events/AUS.jpg)`;
    }

    return `url(assets/images/events/${evt.State}.jpg)`;
   }

   convertNameSlug(evt:TtEvent)
   {
      return this.commonService.convertToSlug(evt.Name);
   }
}

