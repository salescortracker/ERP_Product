import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepMaintenanceCostingComponent } from './mai-rep-maintenance-costing.component';

describe('MaiRepMaintenanceCostingComponent', () => {
  let component: MaiRepMaintenanceCostingComponent;
  let fixture: ComponentFixture<MaiRepMaintenanceCostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepMaintenanceCostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepMaintenanceCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
