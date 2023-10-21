import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];


  public checkoutForm: FormGroup;
  
  public blogData: any
  
  constructor(private fb: FormBuilder, private playerService:PlayerService, private route: ActivatedRoute) {
    this.blogData = blogBasicDB.list;
    this.checkoutForm = this.fb.group({
      address: ['', [Validators.required, Validators.maxLength(50)]], 
    });
   }

  ngOnInit() {
      var keyword = this.route.snapshot.params.keyword;
      console.log('keyword', keyword);
      this.playerService.searchPlayerByName(keyword).subscribe(players => {
        this.players = players;
        console.log(this.players);
      });
  }

  toInitials(player:Player)
  {
      const firstInitial = player.FirstName.charAt(0);
      const lastInitial = player.LastName.charAt(0);
      return `${firstInitial}${lastInitial}`;
  }

  toRating(player:Player)
  {
    return `${player.Rating}±${player.StDev}`;
  }

  toDivision(player:Player)
  {
    switch(player.Division){
      case 0:
        return "";
      case 1:
        return "Div 1";
      case 2:
        return "Div 2";
      case 3:
        return "Div 3";
      case 4:
        return "Div 4";
      case 5:
        return "Div 5";
      case 99:
        return "Premier";
    }
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