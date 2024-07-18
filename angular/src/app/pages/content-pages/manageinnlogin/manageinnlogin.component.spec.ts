import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageinnloginComponent } from './manageinnlogin.component';

describe('ManageinnloginComponent', () => {
  let component: ManageinnloginComponent;
  let fixture: ComponentFixture<ManageinnloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageinnloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageinnloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
