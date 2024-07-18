import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurAccountsAssignComponent } from './pur-accounts-assign.component';

describe('PurAccountsAssignComponent', () => {
  let component: PurAccountsAssignComponent;
  let fixture: ComponentFixture<PurAccountsAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurAccountsAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurAccountsAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
