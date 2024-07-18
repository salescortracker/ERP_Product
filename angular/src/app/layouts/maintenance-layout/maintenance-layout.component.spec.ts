import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceLayoutComponent } from './maintenance-layout.component';

describe('MaintenanceLayoutComponent', () => {
  let component: MaintenanceLayoutComponent;
  let fixture: ComponentFixture<MaintenanceLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
