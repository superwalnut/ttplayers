import { Component } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubService } from 'src/app/service/club.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent {
    public blogData: any

    state:string = "";
    keyword:string = "";
    clubs:Club[] = [];

    lastClub:Club = null;

    pageSize:number = 6;

    constructor(private clubService:ClubService) {
        this.blogData = blogBasicDB.list;

        this.state = this.getLocalState();
        if(!this.state)
        {
        this.state = "NSW";
        }

        this.search();
    }

   search() {
        this.setLocalState(this.state);
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

export class blogBasicDB {
  static list = [
      {
          Id: 1,
          img: 'assets/images/agency/blog/6.jpg',
          date:'June 19, 2018',
          type:'Phonics ,Newyork',
          title:'Twice profit than before you',
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimenbook...............',
          btn:'read more'
      },
      {
          Id: 2,
          img: 'assets/images/agency/blog/2.jpg',
          date:'June 19, 2018',
          type:'Phonics ,Newyork',
          title:'Twice profit than before you',
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimenbook...............',
          btn:'read more'
      },
      {
          Id: 3,
          img: 'assets/images/agency/blog/3.png',
          date:'June 19, 2018',
          type:'Phonics ,Newyork',
          title:'Twice profit than before you',
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimenbook...............',
          btn:'read more'
      },
      {
          Id: 4,
          img: 'assets/images/agency/blog/4.jpg',
          date:'June 19, 2018',
          type:'Phonics ,Newyork',
          title:'Twice profit than before you',
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimenbook...............',
          btn:'read more'
      },
      {
          Id: 5,
          img: 'assets/images/agency/blog/6.jpg',
          date:'June 19, 2018',
          type:'Phonics ,Newyork',
          title:'Twice profit than before you',
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimenbook...............',
          btn:'read more'
      },
      {
          Id: 6,
          img: 'assets/images/agency/blog/2.jpg',
          date:'June 19, 2018',
          type:'Phonics ,Newyork',
          title:'Twice profit than before you',
          content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimenbook...............',
          btn:'read more'
      }
  ]
}