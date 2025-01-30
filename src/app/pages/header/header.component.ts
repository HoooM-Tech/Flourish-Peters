import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menu: boolean = false;
  menu_icon:string = 'fa-solid fa-bars fa-2xl';

  openMenu() {
    this.menu = !this.menu;
    this.menu_icon = this.menu ? 'fa-solid fa-xmark fa-2xl':'fa-solid fa-bars fa-2xl'
  }

  closeMenu() {
    this.menu = false;
    this.menu_icon = 'fa-solid fa-bars fa-2xl';
  }
}
