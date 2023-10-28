import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym-brand',
  templateUrl: './gym-brand.component.html',
  styleUrls: ['./gym-brand.component.scss']
})
export class GymBrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  brands = [
    { img: "assets/images/gym/brand/tt-au-logo.png" },
    { img: "assets/images/gym/brand/tt-nsw-logo.png" },
    { img: "assets/images/gym/brand/tt-vic-logo.png" },
    { img: "assets/images/gym/brand/tt-sa-logo.png" },
    { img: "assets/images/gym/brand/tt-act-logo.png" },
    { img: "assets/images/gym/brand/tt-qld-logo.png" },
    { img: "assets/images/gym/brand/tt-wa-logo.png" },
    { img: "assets/images/gym/brand/sndtta-logo.png" }
  ]
  
  brandcarouselOptions= {
    items: 6,
    margin: 50,
    autoHeight: true,
    nav: false,
    dots: false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 2,
            margin: 10
        },
        320: {
            items: 3,
            margin: 10
        },
        480:{
            items: 4,
            margin: 30
        },
        768:{
            items: 5,
            margin: 50
        },
        1200: {
            items: 6,
            margin: 50
        }
    }
  }


}
