import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepExpiredPreventiveMaintenancesComponent } from './mai-rep-expired-preventive-maintenances.component';

describe('MaiRepExpiredPreventiveMaintenancesComponent', () => {
  let component: MaiRepExpiredPreventiveMaintenancesComponent;
  let fixture: ComponentFixture<MaiRepExpiredPreventiveMaintenancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepExpiredPreventiveMaintenancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepExpiredPreventiveMaintenancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
