import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalCustomerOpeningsComponent } from './sal-customer-openings.component';

describe('SalCustomerOpeningsComponent', () => {
  let component: SalCustomerOpeningsComponent;
  let fixture: ComponentFixture<SalCustomerOpeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalCustomerOpeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalCustomerOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
