import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdDepartmentsComponent } from './hrd-departments.component';

describe('HrdDepartmentsComponent', () => {
  let component: HrdDepartmentsComponent;
  let fixture: ComponentFixture<HrdDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
