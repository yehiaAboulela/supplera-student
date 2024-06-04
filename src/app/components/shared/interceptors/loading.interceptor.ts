import { LoadingScreenService } from './../services/loading-screen.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private _LoadingScreenService: LoadingScreenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._LoadingScreenService.isLoading.next(true);
    return next.handle(request).pipe(
      finalize(() => {
        this._LoadingScreenService.isLoading.next(false);
      })
    );
  }
}
