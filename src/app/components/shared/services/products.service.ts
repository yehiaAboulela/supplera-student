import { GetTokenService } from './get-token.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private _HttpClient: HttpClient,
    private _GetTokenService: GetTokenService
  ) {}
  token = this._GetTokenService.token;
  state: BehaviorSubject<string> = new BehaviorSubject('all');

  getProducts(): Observable<any> {
    return this._HttpClient.get(
      `https://supplera-backend-o6om.onrender.com/product`
    );
  }
  getSpecificProduct(id: string): Observable<any> {
    return this._HttpClient.get(
      `https://supplera-backend-o6om.onrender.com/product/${id}`,
      {
        headers: this.token,
      }
    );
  }
  unLike(id: string): Observable<any> {
    return this._HttpClient.patch(
      `https://supplera-backend-o6om.onrender.com/product/unLike/${id}`,
      'yehia',
      { headers: this.token }
    );
  }
  like(id: string): Observable<any> {
    return this._HttpClient.patch(
      `https://supplera-backend-o6om.onrender.com/product/like/${id}`,
      'yehia',
      { headers: this.token }
    );
  }

  getCat(): Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/products/categories');
  }
  getSpecificCategory(name: string): Observable<any> {
    return this._HttpClient.get(
      `https://fakestoreapi.com/products/category/${name}`
    );
  }

  addProduct(details: any): Observable<any> {
    return this._HttpClient.post(
      `https://supplera-backend-o6om.onrender.com/product/add`,
      details,
      {
        headers: this.token,
      }
    );
  }
}
