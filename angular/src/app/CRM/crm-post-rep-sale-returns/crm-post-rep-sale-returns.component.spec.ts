import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPostRepSaleReturnsComponent } from './crm-post-rep-sale-returns.component';

describe('CrmPostRepSaleReturnsComponent', () => {
  let component: CrmPostRepSaleReturnsComponent;
  let fixture: ComponentFixture<CrmPostRepSaleReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPostRepSaleReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPostRepSaleReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
