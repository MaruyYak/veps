import { RouterModule, Routes } from '@angular/router';
import { paths } from './shared/configs/path';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: paths.home, component: HomePageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
