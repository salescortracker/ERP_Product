import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUnauthorizeComponent } from './account-unauthorize.component';

describe('AccountUnauthorizeComponent', () => {
  let component: AccountUnauthorizeComponent;
  let fixture: ComponentFixture<AccountUnauthorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountUnauthorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountUnauthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
