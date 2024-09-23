import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AboutPageComponent } from './landing-page/about-page/about-page.component';
import { HomePageComponent } from './landing-page/home-page/home-page.component';
import { CarouselModule } from 'primeng/carousel';
import { BrandsCarouselComponent } from './landing-page/about-page/brands-carousel/brands-carousel.component';
import { BurgerMenuComponent } from './shared/components/header/burger-menu/burger-menu.component';
import { ServicesPageComponent } from './landing-page/services-page/services-page.component';
import { WorkflowPageComponent } from './landing-page/workflow-page/workflow-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NoVacanciesPageComponent } from './landing-page/vacancies-page/no-vacancies-page/no-vacancies-page.component';
import { VacanciesPageComponent } from './landing-page/vacancies-page/vacancies-page.component';
import { AccordionModule } from 'primeng/accordion';
import { ResumeFormComponent } from './landing-page/vacancies-page/resume-form/resume-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from './shared/services/modal/modalService';
import { ProductsPageComponent } from './landing-page/products-page/products-page.component';
import { FilterComponent } from './landing-page/products-page/filter/filter.component';
import { ProductFilterPipe } from './shared/pipes/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    BrandsCarouselComponent,
    BurgerMenuComponent,
    ServicesPageComponent,
    WorkflowPageComponent,
    FooterComponent,
    VacanciesPageComponent,
    NoVacanciesPageComponent,
    ResumeFormComponent,
    ProductsPageComponent,
    FilterComponent,
    ProductFilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule,
    CarouselModule,
    AccordionModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
