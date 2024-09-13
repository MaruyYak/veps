import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobile: boolean = window.innerWidth <= 768;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

}
