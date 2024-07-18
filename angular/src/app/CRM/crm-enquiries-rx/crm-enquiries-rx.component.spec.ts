import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmEnquiriesRXComponent } from './crm-enquiries-rx.component';

describe('CrmEnquiriesRXComponent', () => {
  let component: CrmEnquiriesRXComponent;
  let fixture: ComponentFixture<CrmEnquiriesRXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmEnquiriesRXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmEnquiriesRXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
