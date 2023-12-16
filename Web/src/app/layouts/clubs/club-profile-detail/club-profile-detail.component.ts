import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Club } from 'src/app/models/club';
import { ClubSetup } from 'src/app/models/club-setup';
import { ClubService } from 'src/app/service/club.service';

@Component({
  selector: 'app-profile-club-detail',
  templateUrl: './club-profile-detail.component.html',
  styleUrls: ['./club-profile-detail.component.scss']
})
export class ClubProfileDetailComponent implements OnInit {
  club:Club;
  clubSetup:ClubSetup;

  state:string;

  constructor(private route: ActivatedRoute,private clubService:ClubService,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    var clubId = this.route.snapshot.params.id;
    this.state = this.route.snapshot.queryParams.state;

    this.clubService.getClub(clubId).subscribe(x=>{
      this.club = x;
    });
  }

}