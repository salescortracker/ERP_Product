import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismInvoicingComponent } from './prism-invoicing.component';

describe('PrismInvoicingComponent', () => {
  let component: PrismInvoicingComponent;
  let fixture: ComponentFixture<PrismInvoicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismInvoicingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
