import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
 { path: '', component: LandingPageComponent },
 { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
