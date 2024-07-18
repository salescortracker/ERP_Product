import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDepartmentsComponent } from './inv-departments.component';

describe('InvDepartmentsComponent', () => {
  let component: InvDepartmentsComponent;
  let fixture: ComponentFixture<InvDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
