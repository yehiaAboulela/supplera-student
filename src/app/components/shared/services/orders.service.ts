import { Observable } from 'rxjs';
import { Product } from './../interfaces/product';
import { CartService } from './cart.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetTokenService } from './get-token.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private http: HttpClient,
    private _GetTokenService: GetTokenService
  ) {}
  token = this._GetTokenService.token;

  addOrders(body: object): Observable<any> {
    return this.http.post(`http://localhost:3000/order/add`, body, {
      headers: this.token,
    });
  }
  deleteOrders(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/order/${id}`, {
      headers: this.token,
    });
  }
  getOrders(): Observable<any> {
    return this.http.get(`http://localhost:3000/order/`, {
      headers: this.token,
    });
  }
}
