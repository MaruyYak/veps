import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { landingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AboutPageComponent } from './landing-page/about-page/about-page.component';
import { HomePageComponent } from './landing-page/home-page/home-page.component';
import { CarouselModule } from 'primeng/carousel';
import { BrandsCarouselComponent } from './landing-page/about-page/brands-carousel/brands-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    landingPageComponent,
    HeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    BrandsCarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
