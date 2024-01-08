import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Friend } from 'src/app/models/friend';
import { Player } from 'src/app/models/player';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-competitor-detail-tile',
  templateUrl: './competitor-detail-tile.component.html',
  styleUrls: ['./competitor-detail-tile.component.scss']
})
export class CompetitorDetailTileComponent {
  @Input() player:Player;
  @Input() rank:number;
  @Input() yourPlayerId:string;
  @Output() removeCompetitor = new EventEmitter<Player>();
  
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

  playerClick(e) {
    console.log(e.target.parentNode);
    if(e.target.parentNode.nodeName.toLowerCase() === 'div' ){
      const slug = this.convertNameSlug(this.player);
      this.router.navigate([`/player/${this.player.Id}/${slug}`], { queryParams: { referrer: 'competitors' } });
    }
  }

  remove_competitor(e, player:Player) {
    if(e.target.parentNode.nodeName.toLowerCase() === 'a' ){
      console.log('click remove-friend', player);
      this.removeCompetitor.emit(player);    }

  }

  convertNameSlug(player:Player)
  {
    return this.commonService.convertToSlug(player.FullName);
  }
}
