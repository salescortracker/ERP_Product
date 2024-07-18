import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPostBillSubmissionsComponent } from './crm-post-bill-submissions.component';

describe('CrmPostBillSubmissionsComponent', () => {
  let component: CrmPostBillSubmissionsComponent;
  let fixture: ComponentFixture<CrmPostBillSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPostBillSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPostBillSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
