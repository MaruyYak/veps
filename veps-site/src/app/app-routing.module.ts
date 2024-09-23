import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VacanciesPageComponent } from './landing-page/vacancies-page/vacancies-page.component';
import { ResumeFormComponent } from './landing-page/vacancies-page/resume-form/resume-form.component';
import { ProductsPageComponent } from './landing-page/products-page/products-page.component';

export const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'vacancies', component: VacanciesPageComponent },
  { path: 'vacancies/:respond', component: ResumeFormComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
