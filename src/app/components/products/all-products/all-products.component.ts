import { Product } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}
  products: Product[] = [];
  state: string = 'all';
  rating = '0';
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response: { message: string; products: Product[] }) => {
        // this.products = response.products.filter(
        //   (cur) => cur.status != 'private'
        // );
        this.products = response.products;
        console.log(response);
        this._ProductsService.state.subscribe({
          next: (data) => {
            this.state = data;
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleFilter(state: string) {
    this._ProductsService.state.next(state);
  }
}
