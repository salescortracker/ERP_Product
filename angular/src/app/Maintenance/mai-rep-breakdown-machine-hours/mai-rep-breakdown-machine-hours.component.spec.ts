import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepBreakdownMachineHoursComponent } from './mai-rep-breakdown-machine-hours.component';

describe('MaiRepBreakdownMachineHoursComponent', () => {
  let component: MaiRepBreakdownMachineHoursComponent;
  let fixture: ComponentFixture<MaiRepBreakdownMachineHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepBreakdownMachineHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepBreakdownMachineHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
