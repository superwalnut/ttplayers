import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CommonService } from 'src/app/service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking-item',
  templateUrl: './ranking-item.component.html',
  styleUrls: ['./ranking-item.component.scss']
})
export class RankingItemComponent implements OnInit {
  @Input() player:Player;
  @Input() state:string;

  ranking:number;
  rating:string;

  isMobile:boolean;

  nameInitialSvg:any;

  constructor(private deviceService: DeviceDetectorService, private commonService:CommonService, private router:Router) {
     this.isMobile = this.deviceService.isMobile();
  }

  ngOnInit(): void {
    this.ranking = this.toRanking(this.player);
    this.rating = this.toRating(this.player);

    this.nameInitialSvg = this.getSvg(this.player);

  }

  getSvg(player:Player) {
    return this.commonService.getNameInitialSvg(player, 0);
  }

  toRating(player:Player)
  {
    return `${player.Rating}±${player.StDev}`;
  }
  
  toRanking(player:Player) {
    if(this.state){
      return player.StateGenderRanking;
    } else {
      return player.NationalGenderRanking;
    }
  }

  playerClick(playerId:string) {
    this.router.navigate([`/player/${playerId}`], { queryParams: { referrer: 'ranking' } });
  }

}
