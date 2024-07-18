import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiKeyRepEquipmentGroupsComponent } from './mai-key-rep-equipment-groups.component';

describe('MaiKeyRepEquipmentGroupsComponent', () => {
  let component: MaiKeyRepEquipmentGroupsComponent;
  let fixture: ComponentFixture<MaiKeyRepEquipmentGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiKeyRepEquipmentGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiKeyRepEquipmentGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
