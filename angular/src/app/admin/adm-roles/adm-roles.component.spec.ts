import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRolesComponent } from './adm-roles.component';

describe('AdmRolesComponent', () => {
  let component: AdmRolesComponent;
  let fixture: ComponentFixture<AdmRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
