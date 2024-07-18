import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdKeyRepEmployeesComponent } from './hrd-key-rep-employees.component';

describe('HrdKeyRepEmployeesComponent', () => {
  let component: HrdKeyRepEmployeesComponent;
  let fixture: ComponentFixture<HrdKeyRepEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdKeyRepEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdKeyRepEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
