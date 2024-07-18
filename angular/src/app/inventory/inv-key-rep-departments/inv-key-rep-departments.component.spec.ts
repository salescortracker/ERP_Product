import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvKeyRepDepartmentsComponent } from './inv-key-rep-departments.component';

describe('InvKeyRepDepartmentsComponent', () => {
  let component: InvKeyRepDepartmentsComponent;
  let fixture: ComponentFixture<InvKeyRepDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvKeyRepDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvKeyRepDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
