import { Router } from '@angular/router';
import { ProductsService } from './../shared/services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css'],
})
export class ChooseComponent {
  constructor(
    private ProductsService: ProductsService,
    private Router: Router
  ) {}

  usedOrNew(condetion: string) {
    this.ProductsService.state.next(condetion);
    this.Router.navigate(['/products']);
  }
}
