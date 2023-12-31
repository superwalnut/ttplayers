import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Player } from '../models/player';
import { Timestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private sanitizer: DomSanitizer) {
            
  }
  
  public getNameInitialSvg(player:Player, rank:number | null) {
    const initial = this.toInitials(player);
    const circleColor = this.getCircleColour(player);

    var rankCircle = "";
    if(rank) {
      rankCircle = `<circle cx="30" cy="30" r="5" fill="#000"/>
        <text x="30" y="30" text-anchor="middle" dominant-baseline="central" font-size="8" fill="white">${rank}</text>
      `;
    }

    const svgString = `
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <circle cx="20" cy="20" r="15" fill="${circleColor}"/>
      <text x="20" y="20" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="bold" fill="white">${initial}</text>
      ${rankCircle}
    </svg>
    `;

    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }

  totalPlayedTime(player:Player) : {year, month}{
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const playingDate = this.convertTimeStampToDate(player.StartPlayingDate);
    
    const timeDifference = today.getTime() - playingDate.getTime();
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

  convertTimeStampToDate(timestamp: Timestamp) : Date
  {
    const milliseconds = timestamp.seconds * 1000;
    const date = new Date(milliseconds);
    return date;
  }

  convertToSlug(val:string)
  {
    const stringWithHyphens: string = val.replace(/[\s,]+/g, '-');
    return stringWithHyphens;
  }

  private getCircleColour(player:Player) {
      if(player.Gender == "F") {
          return "#e50202";
      }

      return "#357fef";
  }

  private toInitials(player:Player)
  {
      const firstInitial = player.FirstName.charAt(0);
      const lastInitial = player.LastName.charAt(0);
      return `${firstInitial}${lastInitial}`;
  }
}
