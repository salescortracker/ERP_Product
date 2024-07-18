import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcMIRApprovalsComponent } from './qc-mirapprovals.component';

describe('QcMIRApprovalsComponent', () => {
  let component: QcMIRApprovalsComponent;
  let fixture: ComponentFixture<QcMIRApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcMIRApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcMIRApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
