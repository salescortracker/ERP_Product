import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmSaleReturnsComponent } from './crm-sale-returns.component';

describe('CrmSaleReturnsComponent', () => {
  let component: CrmSaleReturnsComponent;
  let fixture: ComponentFixture<CrmSaleReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmSaleReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmSaleReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
