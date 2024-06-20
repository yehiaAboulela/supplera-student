import { MyOrder } from './../shared/interfaces/order';
import { OrdersService } from './../shared/services/orders.service';
import { Product } from './../shared/interfaces/product';
import { ProductsService } from './../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _OrdersService: OrdersService,
    private toastr: ToastrService
  ) {}
  orders: MyOrder[] = [];
  ngOnInit(): void {
    this._OrdersService.getOrders().subscribe({
      next: (res) => {
        console.log(res);
        this.orders = res.orders;
      },
    });
  }
  cancelOrder(id: string) {
    this._OrdersService.deleteOrders(id).subscribe({
      next: (res) => {
        this.toastr.info('Done');
      },
    });
  }
}
