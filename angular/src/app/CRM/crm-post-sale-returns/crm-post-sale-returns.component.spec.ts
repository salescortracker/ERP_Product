import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPostSaleReturnsComponent } from './crm-post-sale-returns.component';

describe('CrmPostSaleReturnsComponent', () => {
  let component: CrmPostSaleReturnsComponent;
  let fixture: ComponentFixture<CrmPostSaleReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPostSaleReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPostSaleReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
