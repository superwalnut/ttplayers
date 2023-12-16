import { Component, Input, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubPrice } from 'src/app/models/club-price';
import { ClubSetup } from 'src/app/models/club-setup';

@Component({
  selector: 'app-training-pricing',
  templateUrl: './training-pricing.component.html',
  styleUrls: ['./training-pricing.component.scss']
})
export class TrainingPricingComponent implements OnInit{
  @Input() club:Club
  @Input() clubSetup:ClubSetup

  pricing:ClubPrice[]=[
    { 
        Icon:"rocket-ship",
        Package:"Not Provided",
        Features:[],
        Price:0,
      } as ClubPrice
  ];

  ngOnInit(): void {
    this.pricing = this.clubSetup.Prices;
  }

  // pricing = [
  //   { 
  //     icon:"rocket-ship",
  //     package:"free",
  //     feature1:"Easy Installations",
  //     feature2:"Unlimited support",
  //     feature3:"Free Forever",
  //     price:"0",
  //     btn:"contact"
  //   },
  //   {
  //     icon:"diamond",
  //     package:"Gold Plan",
  //     feature1:"Easy Installations",
  //     feature2:"Unlimited support",
  //     feature3:"Free Forever",
  //     price:"49",
  //     btn:"contact"
  //   },
  //   {
  //     icon:"pie-chart",
  //     package:"Silver Plan",
  //     feature1:"Easy Installations",
  //     feature2:"Unlimited support",
  //     feature3:"Free Forever",
  //     price:"99",
  //     btn:"contact"
  //   }
  // ]
  
  pricingcarouselOptions= {
    items: 4,
    margin: 20,
    nav: false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        480: {
            items: 2,
            margin: 10
        },
        992: {
            items: 4,
            margin: 10
        }
    }
  }

}
