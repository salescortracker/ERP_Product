import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiKeyRepEquipmentDetailsComponent } from './mai-key-rep-equipment-details.component';

describe('MaiKeyRepEquipmentDetailsComponent', () => {
  let component: MaiKeyRepEquipmentDetailsComponent;
  let fixture: ComponentFixture<MaiKeyRepEquipmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiKeyRepEquipmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiKeyRepEquipmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
