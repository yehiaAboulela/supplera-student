import { Product } from './../../shared/interfaces/product';
import { LoadingScreenService } from './../../shared/services/loading-screen.service';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  /* 
  medicine
  engineering
  pharmacy
  agriculture
  science
  economics and political science
  college of arts
  faculty of computers & information technology
  */
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService
  ) {}

  products: Product[] = [];
  state = 'all';
  p = 1;

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (params) => {
        this._ProductsService.getProducts().subscribe({
          next: (response) => {
            this.products = response.products.filter(
              (cur: Product) =>
                cur.category == params['name'] && cur.status != 'private'
            );
            console.log(this.products);
          },
        });
      },
    });
  }
  handleFilter(state: string) {
    this.state = state;
  }
}
