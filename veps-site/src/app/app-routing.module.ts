import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './landing-page/home-page/home-page.component';
import { AboutPageComponent } from './landing-page/about-page/about-page.component';
import { ServicesPageComponent } from './landing-page/services-page/services-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
