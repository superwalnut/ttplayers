import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  rating:string;
  nameInitialSvg:any;


  constructor(private commonService:CommonService, private router:Router) {
  }
  
  ngOnInit(): void {
    this.time = this.commonService.totalPlayedTime(this.player);
    this.rating = this.toRating(this.player);
    this.nameInitialSvg = this.getSvg(this.player, this.rank);
  }
  
  toRating(player:Player)
  {
    return `${player.Rating}±${player.StDev}`;
  }

  getSvg(player:Player, rank:number | null) {
    return this.commonService.getNameInitialSvg(player, rank);
  }

  remove_friend(e, player:Player) {
    if(e.target.parentNode.nodeName.toLowerCase() === 'a' ){
      this.removeFriend.emit(player);
      console.log('click remove-friend', player);
    }
  }
  
  playerClick(e, playerId:string) {
    console.log(e.target.parentNode);
    if(e.target.parentNode.nodeName.toLowerCase() === 'div' ){
      this.router.navigate([`/player/${playerId}`], { queryParams: { referrer: 'friends' } });
    }
  }
}
