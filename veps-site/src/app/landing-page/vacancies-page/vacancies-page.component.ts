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
    window.scrollTo(0, 0);
    this.loadVacancies();
  }

  loadVacancies(): void {
    this.vacancies = [
      { 
        title: 'Жестянщик-слесарь по изготовлению деталей систем вентиляции',
        description: 'Изготовление изделий из листовой стали: ( воздуховоды и фасонные элементы, водосточные системы, заборные системы, кровельные материалы).',
        requirements: 'Опыт работы от 3х лет; Ответственность, порядочность; пунктуальность;',
        conditions: 'Официальное оформление; График работы с 9.00 до 17.00, суббота и воскресение - выходные); Рост зарплаты в зависимости от результатов работы; испытательный срок - два-три месяца;',
        salary: 'От 1500 BYN',
        link: 'link1'
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
