import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player-sets-statistics',
  templateUrl: './player-sets-statistics.component.html',
  styleUrls: ['./player-sets-statistics.component.scss']
})
export class PlayerSetsStatisticsComponent {
  @Input() player: Player;

}
