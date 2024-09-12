import { Component } from '@angular/core';

@Component({
  selector: 'app-brands-carousel',
  templateUrl: './brands-carousel.component.html',
  styleUrl: './brands-carousel.component.scss'
})
export class BrandsCarouselComponent {
  images: string[] = [
    'assets/clients/amipak.png',
    'assets/clients/belprodukt.png',
    'assets/clients/gomelskayaPravda.png',
    'assets/clients/talenGrass.png',
    'assets/clients/spartak.png',
    'assets/clients/amipak.png',
    'assets/clients/belprodukt.png',
    'assets/clients/gomelskayaPravda.png'
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px', 
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 2,
      numScroll: 1
    }
  ];
}
