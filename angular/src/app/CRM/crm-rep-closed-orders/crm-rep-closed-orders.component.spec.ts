import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmRepClosedOrdersComponent } from './crm-rep-closed-orders.component';

describe('CrmRepClosedOrdersComponent', () => {
  let component: CrmRepClosedOrdersComponent;
  let fixture: ComponentFixture<CrmRepClosedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmRepClosedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmRepClosedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
