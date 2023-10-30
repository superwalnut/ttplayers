import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  public blogData: any
  
  constructor() {
    this.blogData = blogBasicDB.list;
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