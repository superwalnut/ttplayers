import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  @Output() removeFriend = new EventEmitter<Player>();
  
  time:any;

  /**
   *
   */
  constructor(private sanitizer: DomSanitizer) {
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

    // if (days > 0) {
    //   if (result) {
    //     result += ", ";
    //   }
    //   result += `${days} ${days === 1 ? 'day' : 'Days'}`;
    // }

    return { year:years, month:months};
  }

  getCircleColour(player:Player) {
    if(player.Gender == "F") {
      return "#e50202";
    }

    return "#357fef";
  }

  toInitials(player:Player)
  {
      const firstInitial = player.FirstName.charAt(0);
      const lastInitial = player.LastName.charAt(0);
      return `${firstInitial}${lastInitial}`;
  }

  getSvg(player:Player, rank:number) {
    const initial = this.toInitials(player);
    const circleColor = this.getCircleColour(player);

    const svgString = `
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="svg-initial">
      <circle cx="20" cy="20" r="15" fill="${circleColor}"/>
      <text x="20" y="20" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="bold" fill="white">${initial}</text>

      <circle cx="30" cy="30" r="5" fill="#000"/>
      <text x="30" y="30" text-anchor="middle" dominant-baseline="central" font-size="8" fill="white">${rank}</text>
    </svg>
    `;
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }

  remove_friend(player:Player) {
    console.log('click remove-friend', player);
    this.removeFriend.emit(player);
  }
}
