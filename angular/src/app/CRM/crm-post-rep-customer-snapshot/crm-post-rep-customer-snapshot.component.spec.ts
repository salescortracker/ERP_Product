import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPostRepCustomerSnapshotComponent } from './crm-post-rep-customer-snapshot.component';

describe('CrmPostRepCustomerSnapshotComponent', () => {
  let component: CrmPostRepCustomerSnapshotComponent;
  let fixture: ComponentFixture<CrmPostRepCustomerSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPostRepCustomerSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPostRepCustomerSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
