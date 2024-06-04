import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoadingScreenService {
  isLoading = new BehaviorSubject(false);
}
