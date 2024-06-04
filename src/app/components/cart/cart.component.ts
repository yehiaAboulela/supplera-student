import { OrdersService } from './../shared/services/orders.service';
import { Product } from './../shared/interfaces/product';

import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private _CartService: CartService,
    private _OrdersService: OrdersService
  ) {}
  /* cart: { products: Product[]; amount: number; subPrice: number } = JSON.parse(
    localStorage.getItem('cart') as string
  ); */
  cart: { products: Product[]; amount: number; subPrice: number } =
    this._CartService.userCart;
  method: string = 'visa';

  shipCost = 80;
  descountRate = 10;
  descount = Math.trunc((this.cart.subPrice + 80) * 0.1);
  total = Math.trunc((this.cart.subPrice + 80) * 0.9);

  handleChange(event: any) {
    this.method = event.target.id;
  }

  /* ----- CRUD ----- */
  removeItem(id: string) {
    this._CartService.removeItemFromCart(id);
    this.cart = this._CartService.userCart;
    this.descount = Math.trunc((this.cart.subPrice + 80) * 0.1);
    this.total = Math.trunc((this.cart.subPrice + 80) * 0.9);
  }

  addOrder() {
    this._OrdersService.changeOrder(this.cart);
    this._CartService.clearCart();
    this.cart = this._CartService.userCart;
  }
}
