import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiEquipGroupsComponent } from './mai-equip-groups.component';

describe('MaiEquipGroupsComponent', () => {
  let component: MaiEquipGroupsComponent;
  let fixture: ComponentFixture<MaiEquipGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiEquipGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiEquipGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
