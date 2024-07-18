import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdKeyRepDepartmentsComponent } from './hrd-key-rep-departments.component';

describe('HrdKeyRepDepartmentsComponent', () => {
  let component: HrdKeyRepDepartmentsComponent;
  let fixture: ComponentFixture<HrdKeyRepDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdKeyRepDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdKeyRepDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
