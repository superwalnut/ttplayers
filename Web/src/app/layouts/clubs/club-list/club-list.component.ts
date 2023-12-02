import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club } from 'src/app/models/club';
import { ClubService } from 'src/app/service/club.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent {

    state:string = "";
    keyword:string = "";
    clubs:Club[] = [];

    lastClub:Club = null;

    pageSize:number = 6;

    constructor(private clubService:ClubService, private route: ActivatedRoute) {
        const queryState = this.route.snapshot.queryParams.state;
        if(queryState){
            //redirected from a query string with state
            this.setLocalState(queryState);
            this.state = queryState;
        }
        else {
            this.state = this.getLocalState();
        }

        if(!this.state)
        {
        this.state = "NSW";
        }

        this.search();
    }

   search() {
        this.setLocalState(this.state);
        this.clubs = [];
        this.clubService.searchClubs(this.keyword, this.state, this.pageSize).subscribe(x=>{
            this.clubs = x;
            if(x.length<=0){
                this.lastClub = null;
            } else {
                this.lastClub = x[x.length-1];
            }

            if(x.length<this.pageSize){
                this.lastClub = null;
            }
        });
    }

    loadMoreClubs() {
        console.log('click!');
        this.clubService.searchClubsWithPaging(this.keyword, this.state, this.pageSize, this.lastClub).subscribe(events =>{
          console.log('response with paging', events);
    
          if(events.length<=0){
            this.lastClub = null;
          } else {
            events.forEach((evt, index) => {
                this.clubs.push(evt);
            });
        
            this.lastClub = events[events.length-1];
          }
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

    displayWebsite(website:string) {
        var val = website.replace("https://","");
        if(val.length>50) {
            return val.substring(0,40) + '...';
            //https://sites.google.com/site/coffsharbourtabletennisclub/ho
        }
        return val;
    }

}
