import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdAppointmentDetailsComponent } from './hrd-appointment-details.component';

describe('HrdAppointmentDetailsComponent', () => {
  let component: HrdAppointmentDetailsComponent;
  let fixture: ComponentFixture<HrdAppointmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdAppointmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdAppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
