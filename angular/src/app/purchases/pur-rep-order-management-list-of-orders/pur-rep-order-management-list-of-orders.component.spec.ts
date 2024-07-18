import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementListOfOrdersComponent } from './pur-rep-order-management-list-of-orders.component';

describe('PurRepOrderManagementListOfOrdersComponent', () => {
  let component: PurRepOrderManagementListOfOrdersComponent;
  let fixture: ComponentFixture<PurRepOrderManagementListOfOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementListOfOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementListOfOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
