import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsMenuComponent } from './accounts-menu.component';

describe('AccountsMenuComponent', () => {
  let component: AccountsMenuComponent;
  let fixture: ComponentFixture<AccountsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
