import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepEnquiriesPendingComponent } from './crm-pre-rep-enquiries-pending.component';

describe('CrmPreRepEnquiriesPendingComponent', () => {
  let component: CrmPreRepEnquiriesPendingComponent;
  let fixture: ComponentFixture<CrmPreRepEnquiriesPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepEnquiriesPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepEnquiriesPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
