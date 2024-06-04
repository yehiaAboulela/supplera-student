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
  userCart: { products: Product[]; amount: number; subPrice: number } = {
    products: [] as Product[],
    amount: 0,
    subPrice: 0,
  };
  cartCount: BehaviorSubject<number> = new BehaviorSubject(
    this.userCart.products.length
  );

  /*----- CART C R U D  -----*/
  addToCart(product: Product) {
    if (!JSON.stringify(this.userCart).includes(product.id)) {
      this.userCart.products.push(product);
      // this.userCart.amount = this.userCart.products.length;
      this.cartCount.next(this.userCart.products.length);
      let price = 0;
      this.userCart.products.forEach((cur) => (price += cur.price * cur.count));
      this.userCart.subPrice = Math.floor(price);
      console.log(this.userCart);
      localStorage.setItem('cart', JSON.stringify(this.userCart));
    }
  }
  removeItemFromCart(id: string) {
    console.log(id);
    //filter method dosnt mutate the original array
    this.userCart.products = this.userCart.products.filter(
      (cur) => cur._id !== id
    );
    this.cartCount.next(this.userCart.products.length);
    let price = 0;
    this.userCart.products.forEach((cur) => (price += cur.price * cur.count));
    this.userCart.subPrice = price;
    localStorage.setItem('cart', JSON.stringify(this.userCart));
  }

  clearCart() {
    this.userCart = {
      products: [] as Product[],
      amount: 0,
      subPrice: 0,
    };
    this.cartCount.next(this.userCart.products.length);
  }
}
