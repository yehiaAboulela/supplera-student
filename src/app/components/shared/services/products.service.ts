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
    return this._HttpClient.get(`http://localhost:3000/product`);
  }
  getSpecificProduct(id: string): Observable<any> {
    return this._HttpClient.get(`http://localhost:3000/product/${id}`, {
      headers: this.token,
    });
  }
  unLike(id: string): Observable<any> {
    return this._HttpClient.patch(
      `http://localhost:3000/product/unLike/${id}`,
      'yehia',
      { headers: this.token }
    );
  }
  like(id: string): Observable<any> {
    return this._HttpClient.patch(
      `http://localhost:3000/product/like/${id}`,
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
    return this._HttpClient.post(`http://localhost:3000/product/add`, details, {
      headers: this.token,
    });
  }
}
