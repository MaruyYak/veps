import { Component } from '@angular/core';
import { ModalService } from '../../shared/services/modal/modalService';

@Component({
  selector: 'app-vacancies-page',
  templateUrl: './vacancies-page.component.html',
  styleUrl: './vacancies-page.component.scss'
})
export class VacanciesPageComponent {
  noVacancies: boolean = false;
  vacancies: { 
    title: string, 
    description: string, 
    requirements: string, 
    conditions: string, 
    salary: string,
    link: string
  }[] = [];

  constructor(private modalService: ModalService) {}


  ngOnInit(): void {
    this.loadVacancies();
  }

  loadVacancies(): void {
    this.vacancies = [
      { 
        title: 'Инженер-энергетик',
        description: 'анализ действующих технических нормативных правовых актов; анализ технической документации; подбор надлежащих методик выполнения измерений/испытаний; техническая подготовка для проведения экспертиз; помощь в производстве технических экспертиз.',
        requirements: 'Опыт работы более 2х лет; Знание устройства и принципов работы современных узлов и механизмов машиностроения;',
        conditions: 'официальное оформление; 40-часовая рабочая неделя (график работы с 9.00 до 17.00, суббота и воскресение - выходные); рост зарплаты в зависимости от результатов работы и обучения; испытательный срок - два-три месяца;',
        salary: '1000 - 1500 BYN',
        link: 'link1'
      },
      { 
        title: 'Инженер-механик',
        description: 'анализ действующих технических нормативных правовых актов; анализ технической документации; подбор надлежащих методик выполнения измерений/испытаний; техническая подготовка для проведения экспертиз; помощь в производстве технических экспертиз.',
        requirements: 'Опыт работы более 2х лет; Знание устройства и принципов работы современных узлов и механизмов машиностроения;',
        conditions: 'официальное оформление; 40-часовая рабочая неделя; рост зарплаты в зависимости от результатов работы и обучения; испытательный срок - два-три месяца;',
        salary: '1000 - 1500 BYN',
        link: 'link2'
      },
      {
        title: 'Инженер-энергетик',
        description: 'анализ действующих технических нормативных правовых актов; анализ технической документации; подбор надлежащих методик выполнения измерений/испытаний; техническая подготовка для проведения экспертиз; помощь в производстве технических экспертиз.',
        conditions: 'официальное оформление; 40-часовая рабочая неделя; рост зарплаты в зависимости от результатов работы и обучения; испытательный срок - два-три месяца;',
        requirements: 'Опыт работы более 2х лет; Знание устройства и принципов работы современных узлов и механизмов машиностроения;',
        salary: '1000 - 1500 BYN',
        link: 'link3'
      },

    ];

    if (this.vacancies.length === 0) {
      this.noVacancies = true;
    }
  }

  
  onRespond() {
    this.modalService.openModal();
  }
}
