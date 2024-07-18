import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismProductsComponent } from './prism-products.component';

describe('PrismProductsComponent', () => {
  let component: PrismProductsComponent;
  let fixture: ComponentFixture<PrismProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
