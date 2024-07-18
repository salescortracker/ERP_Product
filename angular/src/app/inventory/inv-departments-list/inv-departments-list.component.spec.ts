import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDepartmentsListComponent } from './inv-departments-list.component';

describe('InvDepartmentsListComponent', () => {
  let component: InvDepartmentsListComponent;
  let fixture: ComponentFixture<InvDepartmentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvDepartmentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvDepartmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
