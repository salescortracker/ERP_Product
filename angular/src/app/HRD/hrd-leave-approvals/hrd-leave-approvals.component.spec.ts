import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdLeaveApprovalsComponent } from './hrd-leave-approvals.component';

describe('HrdLeaveApprovalsComponent', () => {
  let component: HrdLeaveApprovalsComponent;
  let fixture: ComponentFixture<HrdLeaveApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdLeaveApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdLeaveApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
