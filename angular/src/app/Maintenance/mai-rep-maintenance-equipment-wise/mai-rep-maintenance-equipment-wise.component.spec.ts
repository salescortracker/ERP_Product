import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepMaintenanceEquipmentWiseComponent } from './mai-rep-maintenance-equipment-wise.component';

describe('MaiRepMaintenanceEquipmentWiseComponent', () => {
  let component: MaiRepMaintenanceEquipmentWiseComponent;
  let fixture: ComponentFixture<MaiRepMaintenanceEquipmentWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepMaintenanceEquipmentWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepMaintenanceEquipmentWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
