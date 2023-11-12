import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  /**
   *
   */
  constructor(private modalService:NgbModal) {    
  }
  openVerticallyCentered(content) {
    this.modalService.open(content);
  }
}
