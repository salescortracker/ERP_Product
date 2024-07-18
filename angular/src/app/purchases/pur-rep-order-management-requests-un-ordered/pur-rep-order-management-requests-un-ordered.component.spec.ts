import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementRequestsUnOrderedComponent } from './pur-rep-order-management-requests-un-ordered.component';

describe('PurRepOrderManagementRequestsUnOrderedComponent', () => {
  let component: PurRepOrderManagementRequestsUnOrderedComponent;
  let fixture: ComponentFixture<PurRepOrderManagementRequestsUnOrderedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementRequestsUnOrderedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementRequestsUnOrderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
