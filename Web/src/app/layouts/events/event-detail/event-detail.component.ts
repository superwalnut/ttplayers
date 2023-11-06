import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TtEvent } from 'src/app/models/event';
import { EventPlayerRating } from 'src/app/models/event-player-rating';
import { EventService } from 'src/app/service/event.service';

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

  constructor(private route: ActivatedRoute, private eventService:EventService) {
    var eventId = this.route.snapshot.params.id;
    this.keyword = this.route.snapshot.queryParams.keyword;
    this.state = this.route.snapshot.queryParams.state;

    this.eventService.getEvent(eventId).subscribe(evt=>{
      this.event = evt;

      this.eventService.getEventPlayer(eventId).subscribe(player =>{

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
}
