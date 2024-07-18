import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepListOfPreventiveMaintenancesComponent } from './mai-rep-list-of-preventive-maintenances.component';

describe('MaiRepListOfPreventiveMaintenancesComponent', () => {
  let component: MaiRepListOfPreventiveMaintenancesComponent;
  let fixture: ComponentFixture<MaiRepListOfPreventiveMaintenancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepListOfPreventiveMaintenancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepListOfPreventiveMaintenancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
