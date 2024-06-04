import { ProductsService } from './../shared/services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sell-products',
  templateUrl: './sell-products.component.html',
  styleUrls: ['./sell-products.component.css'],
})
export class SellProductsComponent implements OnInit {
  uploadedImages: any[] = [];
  imagesSendToServer: any[] = [];
  constructor(
    private http: HttpClient,
    private _FormBuilder: FormBuilder,
    private _ProductsService: ProductsService
  ) {}

  editTap: boolean = false;
  srcTap: boolean = false;
  srcArr = ['', '', '', '', '', ''];

  ngOnInit(): void {}
  onFileChange(event: any): void {
    // Handle file selection and store in uploadedImages array
    const files = event.target.files;
    this.imagesSendToServer = files;
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImages.push({ url: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }
  removeImage(url: string): void {
    this.uploadedImages = this.uploadedImages.filter((cur) => cur.url != url);
  }
  emptyImgs(): void {
    this.uploadedImages = [];
  }

  sellProductForm: FormGroup = this._FormBuilder.group({
    name: [null, [Validators.required]],
    brand: [null, [Validators.required]],
    description: [null, [Validators.required]],
    price: [null, [Validators.required]],
    negotiable: [null, [Validators.required]],
    exchange: [null, [Validators.required]],
    category: [null, [Validators.required]],
  });

  sendProduct() {
    let reqBody = this.sellProductForm.value;
    reqBody.src = this.srcArr;
    console.log(this.sellProductForm.value);
    this._ProductsService.addProduct(reqBody).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
