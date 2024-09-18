import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobile: boolean = window.innerWidth <= 768;
  isMenuOpen: boolean = false;
  @Input() headerColor: string = 'default-header';

  constructor(private router: Router) {}
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  navigateToSection(fragment: string): void {
    if (this.router.url === '/') {
      this.router.navigate([], { fragment });
    } else {
      this.router.navigate(['/'], { fragment });
    }
  }

}
