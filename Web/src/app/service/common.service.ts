import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Player } from '../models/player';

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
