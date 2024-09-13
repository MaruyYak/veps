import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent implements OnInit {
  sections: HTMLElement[] = [];
  lastKnownFragment: string = '';
  disableScrollListener: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sections = Array.from(document.querySelectorAll('[id]')) as HTMLElement[];
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        this.scrollToSection(fragment);
      }
    });
  }

  scrollToSection(fragment: string | null) {
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        this.disableScrollListener = true;
        
        element.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          this.disableScrollListener = false;
        }, 1000);
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.disableScrollListener) return;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.sections[i];
      if (scrollPosition >= section.offsetTop - 50) {
        const sectionId = section.id;
        if (this.lastKnownFragment !== sectionId) {
          this.lastKnownFragment = sectionId;
          this.router.navigate([], { fragment: sectionId, replaceUrl: true });
        }
        break;
      }
    }
  }
}
