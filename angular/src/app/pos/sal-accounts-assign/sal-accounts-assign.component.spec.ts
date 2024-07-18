import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalAccountsAssignComponent } from './sal-accounts-assign.component';

describe('SalAccountsAssignComponent', () => {
  let component: SalAccountsAssignComponent;
  let fixture: ComponentFixture<SalAccountsAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalAccountsAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalAccountsAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
