import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  isOpen: boolean = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  closeMenu(): void {
    this.isOpen = false;
  }

  navigateToSection(fragment: string): void {
    if (this.router.url === '/') {
      this.router.navigate([], { fragment });
    } else {
      this.router.navigate(['/'], { fragment });
    }
    this.closeMenu();
  }
}
