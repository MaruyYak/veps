import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VEPS';

  currentHeaderColor: string = 'default-header';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes('vacancies') || this.router.url.includes('products')) {
          this.currentHeaderColor = 'special-header';
        } else {
          this.currentHeaderColor = 'default-header';
        }
      }
    });
  }
}
