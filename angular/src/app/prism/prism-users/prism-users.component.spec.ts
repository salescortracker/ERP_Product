import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismUsersComponent } from './prism-users.component';

describe('PrismUsersComponent', () => {
  let component: PrismUsersComponent;
  let fixture: ComponentFixture<PrismUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
