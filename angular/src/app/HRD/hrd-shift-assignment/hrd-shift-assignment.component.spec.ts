import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdShiftAssignmentComponent } from './hrd-shift-assignment.component';

describe('HrdShiftAssignmentComponent', () => {
  let component: HrdShiftAssignmentComponent;
  let fixture: ComponentFixture<HrdShiftAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdShiftAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdShiftAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
