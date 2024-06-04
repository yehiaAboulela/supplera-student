import { Product } from './../interfaces/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newOrUsed',
})
export class NewOrUsedPipe implements PipeTransform {
  transform(products: Product[], state: string): Product[] {
    if (state != 'all') {
      return products.filter((cur) => cur.state === state);
    } else {
      return products;
    }
  }
}
