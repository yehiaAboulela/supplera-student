import { GetTokenService } from './../shared/services/get-token.service';
import { CartService } from './../shared/services/cart.service';
import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css'],
})
export class NavMainComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private cart: CartService,
    private TokenServ: GetTokenService
  ) {}
  searchTerm = '';
  token: any;
  cartCount = this.cart.userCart.products.length;
  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.cart.cartCount.subscribe({
      next: (data) => {
        this.cartCount = data;
      },
    });
  }
  handleLogout() {
    this._AuthService.logout().subscribe({
      next: (res) => {
        localStorage.clear();
        this._Router.navigate(['/signin']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  goToSearch() {
    this._Router.navigate(['search', this.searchTerm]);
  }
}
