import { Product } from './../interfaces/product';
import { CartService } from './cart.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private cart: CartService) {}

  orders: { products: Product[]; amount: number; subPrice: number } = {
    products: [] as Product[],
    amount: 0,
    subPrice: 0,
  };

  getOrders() {
    this.orders = this.cart.userCart;
  }
  changeOrder(order: {
    products: Product[];
    amount: number;
    subPrice: number;
  }) {
    this.orders = order;
  }
}
