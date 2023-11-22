import { Component, Input, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';

@Component({
  selector: 'app-club-profile-contact-us',
  templateUrl: './club-profile-contact-us.component.html',
  styleUrls: ['./club-profile-contact-us.component.scss']
})
export class ClubProfileContactUsComponent implements OnInit{
  @Input() club:Club
  address:string;

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  ngOnInit(): void {
    console.log('club', this.club);
    this.address = this.toAddress();
    console.log('address', this.address);

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  toAddress() {
    return `${this.club.Address1} ${this.club.Address2} ${this.club.City} ${this.club.State} ${this.club.PostalCode}`;
  }

}
