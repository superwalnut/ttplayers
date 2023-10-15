import { Component, OnInit } from '@angular/core';
import { Menu, NavService } from '../../../service/nav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuItems: Menu[];
  public openSide : boolean = false;
  public activeItem: string = 'home';
  public active: boolean = false;
  public activeChildItem : string = '' 
  public overlay: boolean = false;
  
  constructor( public navServices: NavService) { }
 
  ngOnInit() {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems
    });
  }

  toggleSidebar(){
    this.openSide = !this.openSide
  }

  closeOverlay(){
    this.openSide = false
  }

  //For Active Main menu in Mobile View
  setActive(menuItem){
    if (this.activeItem === menuItem) {
      this.activeItem = ''
    } else {
      this.activeItem = menuItem
    }
  }

  isActive(item){
    return this.activeItem === item 
  }

  // For Active Child Menu in Mobile View
  setChildActive(subMenu){
    if (this.activeChildItem === subMenu) {
      this.activeChildItem = ''
    } else {
      this.activeChildItem = subMenu
    }
  }

  ischildActive(subMenu){
    return this.activeChildItem === subMenu 
  }


}
