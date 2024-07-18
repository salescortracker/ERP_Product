import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementRequestsComponent } from './pur-rep-order-management-requests.component';

describe('PurRepOrderManagementRequestsComponent', () => {
  let component: PurRepOrderManagementRequestsComponent;
  let fixture: ComponentFixture<PurRepOrderManagementRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
