import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellProductsComponent } from './sell-products.component';

describe('SellProductsComponent', () => {
  let component: SellProductsComponent;
  let fixture: ComponentFixture<SellProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellProductsComponent]
    });
    fixture = TestBed.createComponent(SellProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
