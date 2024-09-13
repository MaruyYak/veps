import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class landingPageComponent {
  sections: HTMLElement[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sections = Array.from(document.querySelectorAll('[id]')) as HTMLElement[];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.sections[i];
      if (scrollPosition >= section.offsetTop - 100) {
        this.router.navigate([], { fragment: section.id, replaceUrl: true });
        break;
      }
    }
  }
}
