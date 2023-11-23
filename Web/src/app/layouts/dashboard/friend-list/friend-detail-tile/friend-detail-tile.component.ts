import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Friend } from 'src/app/models/friend';
import { Player } from 'src/app/models/player';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-friend-detail-tile',
  templateUrl: './friend-detail-tile.component.html',
  styleUrls: ['./friend-detail-tile.component.scss']
})
export class FriendDetailTileComponent implements OnInit {
  @Input() player:Player;
  @Input() rank:number;
  @Input() yourPlayerId:string;
  @Output() removeFriend = new EventEmitter<Player>();
  
  time:any;

  /**
   *
   */
  constructor(private commonService:CommonService) {
  }
  
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

    return { year:years, month:months};
  }

  getSvg(player:Player, rank:number | null) {
    return this.commonService.getNameInitialSvg(player, rank);
  }

  remove_friend(player:Player) {
    console.log('click remove-friend', player);
    this.removeFriend.emit(player);
  }
}
