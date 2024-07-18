import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccAccountGroupsComponent } from './acc-account-groups.component';

describe('AccAccountGroupsComponent', () => {
  let component: AccAccountGroupsComponent;
  let fixture: ComponentFixture<AccAccountGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccAccountGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccAccountGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
