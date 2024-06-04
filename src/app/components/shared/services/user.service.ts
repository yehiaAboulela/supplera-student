import { GetTokenService } from './get-token.service';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private _HttpClient: HttpClient,
    private _GetTokenService: GetTokenService
  ) {}
  headers = this._GetTokenService.token;
  getUser(id: string): Observable<any> {
    return this._HttpClient.get(`http://localhost:5000/user/profile`, {
      headers: this.headers,
    });
  }
  getAllUsers(): Observable<any> {
    return this._HttpClient.get(`http://localhost:5000/user`, {
      headers: this.headers,
    });
  }
  updateProfile(details: object, id: string): Observable<any> {
    return this._HttpClient.put(
      `http://localhost:5000/user/profile/update`,
      details,
      { headers: this.headers }
    );
  }
}
