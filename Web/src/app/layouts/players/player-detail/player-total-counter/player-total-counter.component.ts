import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player-total-counter',
  templateUrl: './player-total-counter.component.html',
  styleUrls: ['./player-total-counter.component.scss']
})
export class PlayerTotalCounterComponent {
  @Input() player: Player;

}
