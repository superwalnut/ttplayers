import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CommonService } from 'src/app/service/common.service';

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

  constructor(private deviceService: DeviceDetectorService, private commonService:CommonService) {
    const deviceInfo = this.deviceService.getDeviceInfo();
     this.isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      console.log('info',deviceInfo);
      console.log('mobile',this.isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
      console.log('tablet',isTablet);  // returns if the device us a tablet (iPad etc)
      console.log('desktop',isDesktopDevice); // returns if the app is running on a Desktop browser.
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

}
