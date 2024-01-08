import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TtEvent } from 'src/app/models/event';
import { EventPlayerRating } from 'src/app/models/event-player-rating';
import { EventService } from 'src/app/service/event.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent {
  event:TtEvent;
  eventMenPlayerRatings:EventPlayerRating[] = [];
  eventWomenPlayerRatings:EventPlayerRating[] = [];
  keyword:string;
  state:string;

  constructor(private route: ActivatedRoute, private eventService:EventService, private title:Title, private commonService:CommonService) {
    var eventId = this.route.snapshot.params.id;
    this.keyword = this.route.snapshot.queryParams.keyword;
    this.state = this.route.snapshot.queryParams.state;

    this.title.setTitle(`Australian Table Tennis Event - ${eventId} details`);

    this.eventService.getEvent(eventId).subscribe(evt=>{
      this.event = evt;

      this.title.setTitle(`${this.event.State} Table Tennis Event - ${this.event.Name}:${eventId}`);

      console.log('event', this.event);
      this.eventService.getEventPlayer(eventId).subscribe(player =>{
        console.log('event-players', player);

        this.eventMenPlayerRatings = [];
        this.eventWomenPlayerRatings = [];
        if(player && player.Players.length>0){
          player.Players.forEach(rating => {
            if(rating.Gender == "M") {
              this.eventMenPlayerRatings.push(rating);
            }

            if(rating.Gender == "F") {
              this.eventWomenPlayerRatings.push(rating);
            }
          });
        }
      });
    });
  }

  toFinalRating(rating:EventPlayerRating)
  {
    return `${rating.FinalMean}±${rating.FinalStDev}`;
  }

  toPointChange(rating:EventPlayerRating) {
    if(rating.PointChange>0)
    {
      return `+${rating.PointChange}`;
    } 

    return rating.PointChange;
  }
  
  convertNameSlug(player:EventPlayerRating)
  {
    return this.commonService.convertToSlug(player.PlayerName);
  }
}
