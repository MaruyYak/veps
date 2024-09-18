import { Component } from '@angular/core';
import { vacanciesList } from '../vacancies-page/vacancies-base/vacansies-base-list'


@Component({
  selector: 'app-vacancies-page',
  templateUrl: './vacancies-page.component.html',
  styleUrl: './vacancies-page.component.scss'
})
export class VacanciesPageComponent {
  noVacancies = true

 ngOninit() {
  if(vacanciesList.length == 0 as number) {
    this.noVacancies = true
  }
  }
}
