import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player-summary',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.scss']
})
export class PlayerSummaryComponent {
  @Input() player: Player;

}
