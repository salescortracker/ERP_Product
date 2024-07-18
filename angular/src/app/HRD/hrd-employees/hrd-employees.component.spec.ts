import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdEmployeesComponent } from './hrd-employees.component';

describe('HrdEmployeesComponent', () => {
  let component: HrdEmployeesComponent;
  let fixture: ComponentFixture<HrdEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
