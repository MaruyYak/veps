import { RouterModule, Routes } from '@angular/router';
import { paths } from './shared/configs/path';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './landing-page/home-page/home-page.component';
import { AboutPageComponent } from './landing-page/about-page/about-page.component';
import { landingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
 {path: paths.home, component: HomePageComponent},
 {path: paths.about, component: AboutPageComponent},
 { path: '', component: landingPageComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
