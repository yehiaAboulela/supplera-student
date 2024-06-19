import { ActivatedRoute } from '@angular/router';
import { Product } from './../shared/interfaces/product';
import { ProductsService } from './../shared/services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(
    private _ProductsService: ProductsService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  products: Product[] = [];
  state: string = 'all';
  p = 1;
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response: { message: string; products: Product[] }) => {
        this._ActivatedRoute.params.subscribe((data) => {
          this.products = response.products.filter(
            (cur) =>
              cur.name.toLowerCase().includes(data['term'].toLowerCase()) &&
              cur.status != 'private'
          );
        });
      },
    });
  }

  handleFilter(state: string) {
    this.state = state;
  }
}
