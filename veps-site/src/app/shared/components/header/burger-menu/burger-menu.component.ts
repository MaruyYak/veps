import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  isOpen: boolean = false;

  onClick() {
    this.isOpen = !this.isOpen;
  }
}
