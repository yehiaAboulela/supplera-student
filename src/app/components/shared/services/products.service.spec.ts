import { TestBed } from '@angular/core/testing';

import { PoductsService } from './poducts.service';

describe('PoductsService', () => {
  let service: PoductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
