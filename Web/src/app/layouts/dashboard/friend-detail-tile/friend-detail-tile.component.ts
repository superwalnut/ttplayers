import { Component, Input } from '@angular/core';
import { Friend } from 'src/app/models/friend';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-friend-detail-tile',
  templateUrl: './friend-detail-tile.component.html',
  styleUrls: ['./friend-detail-tile.component.scss']
})
export class FriendDetailTileComponent {
  @Input() friend:Friend;

}
