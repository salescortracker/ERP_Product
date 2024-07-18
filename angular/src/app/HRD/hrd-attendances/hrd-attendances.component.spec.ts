import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdAttendancesComponent } from './hrd-attendances.component';

describe('HrdAttendancesComponent', () => {
  let component: HrdAttendancesComponent;
  let fixture: ComponentFixture<HrdAttendancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdAttendancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdAttendancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
