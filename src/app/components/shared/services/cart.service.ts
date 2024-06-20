import { Product } from './../interfaces/product';
import { GetTokenService } from './get-token.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private _HttpClient: HttpClient,
    private _GetTokenService: GetTokenService
  ) {}
  token = this._GetTokenService.token;
  // userCart: BehaviorSubject<{ products: Product[]; amount: number }> =
  //   new BehaviorSubject({ products: [] as Product[], amount: 0 });
  userCart: {
    products: { productId: String; quantity: number; price: number }[];
  } = {
    products: [],
  };
  totalPrice: number = 0;
  cartCount: BehaviorSubject<number> = new BehaviorSubject(
    this.userCart.products.length
  );

  /*----- CART C R U D  -----*/
  totalPriceReset(): void {
    let tPrice = 0;
    this.userCart.products.forEach(
      (cur) => (tPrice += cur.price * cur.quantity)
    );
    this.totalPrice = tPrice;
  }

  addToCart(productId: String, quantity: number, price: number) {
    let productsIDS: String[] = [];
    this.userCart.products.forEach((cur) => productsIDS.push(cur.productId));
    if (!productsIDS.includes(productId)) {
      this.userCart.products.push({
        productId: productId,
        quantity: quantity,
        price: price,
      });
      this.totalPriceReset();
      this.cartCount.next(this.userCart.products.length);
    }
  }
  removeItemFromCart(id: string) {
    this.userCart.products = this.userCart.products.filter(
      (cur) => cur.productId !== id
    );
    this.totalPriceReset();
    this.cartCount.next(this.userCart.products.length);
  }

  clearCart() {
    this.userCart.products = [
      {} as { productId: String; quantity: number; price: number },
    ];
  }
}
