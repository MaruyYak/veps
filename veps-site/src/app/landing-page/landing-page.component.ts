import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {
  sections: { id: string, element: HTMLElement }[] = [];
  isAutoScrolling: boolean = false;
  currentSection: string | null = null;
  scrollDebounceTimeout: any = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.handleFragment();
    });
  }

  ngAfterViewInit(): void {
    this.initializeSections();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.isAutoScrolling) {
      if (this.scrollDebounceTimeout) {
        clearTimeout(this.scrollDebounceTimeout);
      }
      this.scrollDebounceTimeout = setTimeout(() => {
        this.handleScroll();
      }, 100);
    }
  }

  initializeSections(): void {
    this.sections = Array.from(document.querySelectorAll('[id]'))
      .map(element => ({
        id: element.id,
        element: element as HTMLElement
      }));
  }

  handleScroll(): void {
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;
    for (const section of this.sections) {
      const { offsetTop, offsetHeight } = section.element;
      if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + offsetHeight) {
        if (section.id !== this.currentSection) {
          this.currentSection = section.id;
          this.router.navigate([], { fragment: section.id, replaceUrl: true });
        }
        break;
      }
    }
  }

  handleFragment(): void {
    const fragment = this.route.snapshot.fragment;
    if (fragment && fragment !== this.currentSection) {
      const element = document.getElementById(fragment);
      if (element) {
        this.isAutoScrolling = true;
        this.isAutoScrolling = false;
        this.currentSection = fragment;
      }
    }
  }}
