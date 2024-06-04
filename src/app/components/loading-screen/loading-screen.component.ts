import { LoadingScreenService } from './../shared/services/loading-screen.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css'],
})
export class LoadingScreenComponent implements OnInit {
  constructor(private _LoadingScreenService: LoadingScreenService) {}

  isActive: boolean = false;

  ngOnInit(): void {
    this._LoadingScreenService.isLoading.subscribe({
      next: (data) => {
        this.isActive = data;
      },
    });
  }
}
