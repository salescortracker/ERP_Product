import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurSupplierOpeningBalancesComponent } from './pur-supplier-opening-balances.component';

describe('PurSupplierOpeningBalancesComponent', () => {
  let component: PurSupplierOpeningBalancesComponent;
  let fixture: ComponentFixture<PurSupplierOpeningBalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurSupplierOpeningBalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurSupplierOpeningBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
