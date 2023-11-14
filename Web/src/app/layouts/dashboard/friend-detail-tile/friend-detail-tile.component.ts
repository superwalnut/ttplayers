import { Component, Input, OnInit } from '@angular/core';
import { Friend } from 'src/app/models/friend';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-friend-detail-tile',
  templateUrl: './friend-detail-tile.component.html',
  styleUrls: ['./friend-detail-tile.component.scss']
})
export class FriendDetailTileComponent implements OnInit {
  @Input() player:Player;
  @Input() rank:number;
  @Input() yourself:Player;
  time:any;
  
  ngOnInit(): void {
    this.time = this.totalPlayedTime(this.player);
  }
  
  toRating(player:Player)
  {
    return `${player.Rating}±${player.StDev}`;
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
}
