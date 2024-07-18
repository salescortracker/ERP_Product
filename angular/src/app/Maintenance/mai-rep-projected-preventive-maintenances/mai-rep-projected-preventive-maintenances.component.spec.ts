import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepProjectedPreventiveMaintenancesComponent } from './mai-rep-projected-preventive-maintenances.component';

describe('MaiRepProjectedPreventiveMaintenancesComponent', () => {
  let component: MaiRepProjectedPreventiveMaintenancesComponent;
  let fixture: ComponentFixture<MaiRepProjectedPreventiveMaintenancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepProjectedPreventiveMaintenancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepProjectedPreventiveMaintenancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
