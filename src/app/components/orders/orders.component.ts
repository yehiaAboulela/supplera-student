import { OrdersService } from './../shared/services/orders.service';
import { Product } from './../shared/interfaces/product';
import { ProductsService } from './../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _OrdersService: OrdersService
  ) {}

  orders: { products: Product[]; amount: number; subPrice: number } = {
    products: [] as Product[],
    amount: 0,
    subPrice: 0,
  };
  ngOnInit(): void {
    this.orders = this._OrdersService.orders;
  }
}
