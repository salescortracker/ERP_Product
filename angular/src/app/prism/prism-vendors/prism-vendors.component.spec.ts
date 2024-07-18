import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismVendorsComponent } from './prism-vendors.component';

describe('PrismVendorsComponent', () => {
  let component: PrismVendorsComponent;
  let fixture: ComponentFixture<PrismVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
