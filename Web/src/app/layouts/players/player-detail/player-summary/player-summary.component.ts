import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Statistics } from 'src/app/models/statistics';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-player-summary',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.scss']
})
export class PlayerSummaryComponent implements OnInit {

  @Input() player: Player;
  @Input() stats: Statistics;

  startPlayingDate:Date;

  constructor(private commonService: CommonService) {
    
  }

  ngOnInit(): void {
    this.startPlayingDate = this.commonService.convertTimeStampToDate(this.player.StartPlayingDate);
  }
}
