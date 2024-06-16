import { GetTokenService } from './get-token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _HttpClient: HttpClient,
    private _GetTokenService: GetTokenService
  ) {}
  headers = this._GetTokenService.token;
  registerForm(body: any): Observable<any> {
    return this._HttpClient.post(`http://localhost:3000/auth/signup`, body);
  }

  login(body: any): Observable<any> {
    return this._HttpClient.post('http://localhost:3000/auth/login', body);
  }
  logout(): Observable<any> {
    return this._HttpClient.post(`http://localhost:3000/auth/logout`, 'yehia', {
      headers: this.headers,
    });
  }
  sendOtp(email: object): Observable<any> {
    return this._HttpClient.post(`http://localhost:3000/otp`, email);
  }
}
