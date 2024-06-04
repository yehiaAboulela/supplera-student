import { GetTokenService } from './get-token.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestingService {
  constructor(
    private _HttpClient: HttpClient,
    private _GetTokenService: GetTokenService
  ) {}
  token = this._GetTokenService.token;
  addProduct(details: object): Observable<any> {
    return this._HttpClient.post(`http://localhost:5000/product/add`, details, {
      headers: this.token,
    });
  }
  getProducts(): Observable<any> {
    return this._HttpClient.get(`http://localhost:5000/product`);
  }
}
