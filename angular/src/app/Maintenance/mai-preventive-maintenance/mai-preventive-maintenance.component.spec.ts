import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiPreventiveMaintenanceComponent } from './mai-preventive-maintenance.component';

describe('MaiPreventiveMaintenanceComponent', () => {
  let component: MaiPreventiveMaintenanceComponent;
  let fixture: ComponentFixture<MaiPreventiveMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiPreventiveMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiPreventiveMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
