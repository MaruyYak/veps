import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VacanciesPageComponent } from './landing-page/vacancies-page/vacancies-page.component';

export const routes: Routes = [
  // { path: 'home', component: HomePageComponent },
  // { path: 'about', component: AboutPageComponent },
  // { path: 'services', component: ServicesPageComponent },
  { path: 'vacancies', component: VacanciesPageComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
