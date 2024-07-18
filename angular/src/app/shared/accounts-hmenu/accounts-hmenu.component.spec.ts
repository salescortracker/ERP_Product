import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsHMenuComponent } from './accounts-hmenu.component';

describe('AccountsHMenuComponent', () => {
  let component: AccountsHMenuComponent;
  let fixture: ComponentFixture<AccountsHMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsHMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsHMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
