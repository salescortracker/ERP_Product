import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmBillSubmissionsComponent } from './crm-bill-submissions.component';

describe('CrmBillSubmissionsComponent', () => {
  let component: CrmBillSubmissionsComponent;
  let fixture: ComponentFixture<CrmBillSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmBillSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmBillSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
