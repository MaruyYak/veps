import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/products.model';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    if (!products || !searchTerm) {
      return products;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return products.filter(product => 
      product.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.desc.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }
}
