import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLayoutComponent } from './production-layout.component';

describe('ProductionLayoutComponent', () => {
  let component: ProductionLayoutComponent;
  let fixture: ComponentFixture<ProductionLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
