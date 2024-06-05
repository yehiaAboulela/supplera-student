import { CartService } from './../../shared/services/cart.service';
import { Product } from './../../shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _ActivatedRoute: ActivatedRoute,
    private _CartService: CartService
  ) {}
  product: Product = {} as Product;
  productImages: string[] = [];
  currentImage: number = 0;
  productCount: number = 1;
  like: string = 'no review';
  rating = '3.4';

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (data) => {
        console.log(data);
        this._ProductsService.getProducts().subscribe({
          next: (response) => {
            const resProduct = response.products[data['id']];
            this.product = resProduct;
            this.productImages = resProduct.src.slice(0, 4);
            if (resProduct.like.length > 0) {
              const total = resProduct.like.length + resProduct.unlike.length;
              this.rating = String(
                ((resProduct.like.length / total) * 100) / 20
              ).slice(0, 3);
            } else if (resProduct.like.length == 0) {
              this.rating = '0';
            }
          },
        });
      },
    });
  }
  displayImage(index: number) {
    this.currentImage = index;
  }
  increase() {
    this.productCount++;
  }
  decrease() {
    if (this.productCount !== 1) {
      this.productCount--;
    }
  }

  /* -------------like - unlike - rating------------- */
  calculateRating(likes: number, dislikes: number) {
    if (likes > 0) {
      const total = likes + dislikes;
      this.rating = String(((likes / total) * 100) / 20).slice(0, 3);
    } else if (likes == 0) {
      this.rating = '0';
    }
  }
  likeProduct(id: string) {
    this._ProductsService.like(id).subscribe({
      next: (response) => {
        this.like = 'like';
        this.calculateRating(
          response.product.like.length,
          response.product.unlike.length
        );
        this.product = response.product;
      },
    });
  }
  UnlikeProduct(id: string) {
    this._ProductsService.unLike(id).subscribe({
      next: (response: { message: string; product: Product }) => {
        this.like = 'unLike';
        this.calculateRating(
          response.product.like.length,
          response.product.unlike.length
        );
        this.product = response.product;
      },
    });
  }

  /* add to cart */

  addToCart() {
    this.product.count = this.productCount;
    this._CartService.addToCart(this.product);
  }
}
/* 
{
  products:[
    {},{},{}
  ],
  amount: 3

}
*/
