import { Component } from '@angular/core';
import { products } from './products-base/productsBase';
import { Product } from '../../shared/models/products.model';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {
  products = products;  
  searchTerm: string = '';  
  currentImageIndexes: number[] = [];

  filteredProducts: Product[] = this.products; 

  constructor() {
    this.currentImageIndexes = this.products.map(() => 0);
  }

  nextImage(productIndex: number) {
    const product = this.products[productIndex];
    const nextIndex = (this.currentImageIndexes[productIndex] + 1) % product.images.length;
    this.currentImageIndexes[productIndex] = nextIndex;
  }

  prevImage(productIndex: number) {
    const product = this.products[productIndex];
    const prevIndex = (this.currentImageIndexes[productIndex] - 1 + product.images.length) % product.images.length;
    this.currentImageIndexes[productIndex] = prevIndex;
  }


  updateSearchTerm(term: string) {
    this.searchTerm = term;
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.desc.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
