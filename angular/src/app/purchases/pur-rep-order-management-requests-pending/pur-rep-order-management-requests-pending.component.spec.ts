import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementRequestsPendingComponent } from './pur-rep-order-management-requests-pending.component';

describe('PurRepOrderManagementRequestsPendingComponent', () => {
  let component: PurRepOrderManagementRequestsPendingComponent;
  let fixture: ComponentFixture<PurRepOrderManagementRequestsPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementRequestsPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementRequestsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
