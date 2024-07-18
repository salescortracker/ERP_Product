import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiEquipDetailsComponent } from './mai-equip-details.component';

describe('MaiEquipDetailsComponent', () => {
  let component: MaiEquipDetailsComponent;
  let fixture: ComponentFixture<MaiEquipDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiEquipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiEquipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
