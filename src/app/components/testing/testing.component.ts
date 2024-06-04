import { GetTokenService } from './../shared/services/get-token.service';
import { TestingService } from './../shared/services/testing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit {
  constructor(private _TestingService: TestingService) {}

  ngOnInit(): void {}

  addProduct() {
    // this._TestingService
    //   .addProduct({
    //     name: 'ASA TECHMED Nurse EMT Starter Pack Stethoscope',
    //     description:
    //       'COMPLETE MEDICAL STARTER KIT: This Stethoscope, Blood Pressure Monitor and EMT Shears set is perfect for a medical or nursing student',
    //     category: 'anatomy',
    //     price: 12000,
    //     stock: 0,
    //     status: 'public',
    //     src: 'https://m.media-amazon.com/images/I/81w8MNWb4nL._AC_SL1500_.jpg',
    //   })
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //     },
    //   });
  }
  viewProducts() {
    // this._TestingService.getProducts().subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    // });
  }
}
