import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  keyword:string;

  public checkoutForm: FormGroup;
  
  public blogData: any
  
  constructor(private fb: FormBuilder, private playerService:PlayerService, private route: ActivatedRoute, private router:Router) {
    this.checkoutForm = this.fb.group({
      address: ['', [Validators.required, Validators.maxLength(50)]], 
    });
   }

  ngOnInit() {
      var keyword = this.route.snapshot.params.keyword;
      if(keyword){
        this.keyword = keyword;
        this.playerService.searchPlayerByName(this.keyword).subscribe(players => {
          this.players = players;
          console.log(this.players);
        });
      }
  }
  
  search() {
    console.log(this.keyword);

    this.playerService.searchPlayerByName(this.keyword).subscribe(players => {
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

