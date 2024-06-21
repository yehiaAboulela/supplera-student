import { OrdersService } from './../shared/services/orders.service';
import { Product } from './../shared/interfaces/product';

import { CartService } from './../shared/services/cart.service';
import { Component, OnInit, afterNextRender } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private _CartService: CartService,
    private _OrdersService: OrdersService,
    private _Toaster: ToastrService,
    private _ProductsService: ProductsService
  ) {}

  cart: {
    userToken: string;
    products: { productId: String; quantity: number; price: number }[];
  } = this._CartService.userCart;
  totalPrice = this._CartService.totalPrice;
  method: string = 'visa';
  shipCost = 80;
  descountRate = 10;
  products: Product[] = [];
  descount = Math.trunc((this.totalPrice + 80) * 0.1);
  total = Math.trunc((this.totalPrice + 80) * 0.9);

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (res: { message: string; products: Product[] }) => {
        let productsIDS: String[] = [];
        this.cart.products.forEach((cur) => productsIDS.push(cur.productId));
        productsIDS.forEach((cartID) => {
          res.products.forEach((resProduct) => {
            if (resProduct.id == cartID) {
              this.products.push(resProduct);
            }
          });
        });
        console.log(this.cart);
      },
    });
  }

  handleChange(event: any) {
    this.method = event.target.id;
  }

  /* ----- CRUD ----- */
  removeItem(id: string) {
    this._CartService.removeItemFromCart(id);
    this.cart = this._CartService.userCart;
    this.totalPrice = this._CartService.totalPrice;
    this.descount = Math.trunc((this.totalPrice + 80) * 0.1);
    this.total = Math.trunc((this.totalPrice + 80) * 0.9);

    this.products = [];
    this._ProductsService.getProducts().subscribe({
      next: (res: { message: string; products: Product[] }) => {
        let productsIDS: String[] = [];
        this.cart.products.forEach((cur) => productsIDS.push(cur.productId));
        productsIDS.forEach((cartID) => {
          res.products.forEach((resProduct) => {
            if (resProduct.id == cartID) {
              this.products.push(resProduct);
            }
          });
        });
      },
    });
  }

  addOrder() {
    this._OrdersService.addOrders(this.cart).subscribe({
      next: (res) => {
        console.log(res);
        this._CartService.clearCart();
        this.cart = this._CartService.userCart;
        this.totalPrice = this._CartService.totalPrice;
        this.products = [];
        this._Toaster.success('Check your Orders', 'Successful purchase');
      },
    });
  }
}
