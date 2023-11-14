import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player-detail-basic-info',
  templateUrl: './player-detail-basic-info.component.html',
  styleUrls: ['./player-detail-basic-info.component.scss']
})
export class PlayerDetailBasicInfoComponent implements OnInit {
  @Input() player:Player;

  time:any;

  constructor() {
    
  }
  ngOnInit(): void {
    this.time = this.totalPlayedTime(this.player);
  }
  
  totalPlayedTime(player:Player) : {year, month}{
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const timeDifference = today.getTime() - player.StartPlayingDate.toDate().getTime();
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const millisecondsInMonth = millisecondsInDay * 30.44; // Approximate average number of days in a month

    const years = Math.floor(timeDifference / (millisecondsInDay * 365));
    const months = Math.floor((timeDifference % (millisecondsInDay * 365)) / millisecondsInMonth);
    const days = Math.floor((timeDifference % millisecondsInMonth) / millisecondsInDay);

    let result = "";

    if (years > 0) {
      result += `${years} ${years === 1 ? 'Yr' : 'Yr'}`;
    }

    if (months > 0) {
      if (result) {
        result += ", ";
      }
      result += `${months} ${months === 1 ? 'M' : 'M'}`;
    }

    // if (days > 0) {
    //   if (result) {
    //     result += ", ";
    //   }
    //   result += `${days} ${days === 1 ? 'day' : 'Days'}`;
    // }

    return { year:years, month:months};
  }

    // display label methods
    toRating(player:Player)
    {
      return `${player.Rating}±${player.StDev}`;
    }
  
    toGenderRanking(player:Player) {
      if(player.Gender == "M"){
        return "(Men's)";
      }
  
      if(player.Gender == "F"){
        return "(Women's)";
      }
  
      return "";
    }
}
