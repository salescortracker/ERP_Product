import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalInvoicesComponent } from './sal-invoices.component';

describe('SalInvoicesComponent', () => {
  let component: SalInvoicesComponent;
  let fixture: ComponentFixture<SalInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
