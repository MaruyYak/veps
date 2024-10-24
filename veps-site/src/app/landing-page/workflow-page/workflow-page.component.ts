import { Component } from '@angular/core';

interface WorkFlowInfo {
  number: string;
  img: string;
  title: string;
  desc: string;
}


@Component({
  selector: 'app-workflow-page',
  templateUrl: './workflow-page.component.html',
  styleUrl: './workflow-page.component.scss'
})

export class WorkflowPageComponent {

  workFlowInfo: WorkFlowInfo[] = [
    {
      number: '1',
      img: '/assets/workflows/1.png',
      title: 'Детали проекта и посещение объекта',
      desc: 'Узнаем подробности о вашем проекте, включая тип  объекта и сроки, проводим замеры с выездом на объект, согласовываем места размещения оборудования и его функционал.',
    },
    {
      number: '2',
      img: '/assets/workflows/2.png',
      title: 'Заключение Договора',
      desc: 'После первичного посещения объекта мы заключаем договор с заказчиком.',
    },
    {
      number: '3',
      img: '/assets/workflows/3.png',
      title: 'Согласование и Корректировки',
      desc: 'Мы посещаем объект для согласования  первичных расчетов и ознакомляем заказчика с предварительными данными.',
    },
    {
      number: '4',
      img: '/assets/workflows/4.png',
      title: 'Расчет и Чертежи',
      desc: 'Мы выполняем окончательные расчеты и составляем рабочие чертежи системы вентиляции.',
    },
    {
      number: '5',
      img: '/assets/workflows/5.png',
      title: 'Заключение Второго Договора',
      desc: 'Заключаем второй договор на изготовление, монтаж и поставку оборудования.',
    },
    {
      number: '6',
      img: '/assets/workflows/6.png',
      title: 'Паспортизация и Испытания',
      desc: 'При сдаче объекта проводим паспортизацию систем вентиляции, аэродинамические испытания, составляем технический отчет и выдаем протоколы испытаний.',
    },
  ]
}
