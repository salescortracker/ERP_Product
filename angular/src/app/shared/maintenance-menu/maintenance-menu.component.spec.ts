import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceMenuComponent } from './maintenance-menu.component';

describe('MaintenanceMenuComponent', () => {
  let component: MaintenanceMenuComponent;
  let fixture: ComponentFixture<MaintenanceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
