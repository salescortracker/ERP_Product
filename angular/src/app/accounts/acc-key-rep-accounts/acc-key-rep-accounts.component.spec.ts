import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccKeyRepAccountsComponent } from './acc-key-rep-accounts.component';

describe('AccKeyRepAccountsComponent', () => {
  let component: AccKeyRepAccountsComponent;
  let fixture: ComponentFixture<AccKeyRepAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccKeyRepAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccKeyRepAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
