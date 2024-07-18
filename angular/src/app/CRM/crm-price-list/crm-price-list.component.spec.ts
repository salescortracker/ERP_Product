import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPriceListComponent } from './crm-price-list.component';

describe('CrmPriceListComponent', () => {
  let component: CrmPriceListComponent;
  let fixture: ComponentFixture<CrmPriceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPriceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
