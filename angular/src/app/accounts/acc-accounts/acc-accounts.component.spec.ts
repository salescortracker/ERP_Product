import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccAccountsComponent } from './acc-accounts.component';

describe('AccAccountsComponent', () => {
  let component: AccAccountsComponent;
  let fixture: ComponentFixture<AccAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
