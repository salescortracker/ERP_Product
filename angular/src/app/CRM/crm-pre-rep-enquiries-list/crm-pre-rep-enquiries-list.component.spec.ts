import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepEnquiriesListComponent } from './crm-pre-rep-enquiries-list.component';

describe('CrmPreRepEnquiriesListComponent', () => {
  let component: CrmPreRepEnquiriesListComponent;
  let fixture: ComponentFixture<CrmPreRepEnquiriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepEnquiriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepEnquiriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
