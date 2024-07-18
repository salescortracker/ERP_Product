import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiSetsAccountsAssignComponent } from './mai-sets-accounts-assign.component';

describe('MaiSetsAccountsAssignComponent', () => {
  let component: MaiSetsAccountsAssignComponent;
  let fixture: ComponentFixture<MaiSetsAccountsAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiSetsAccountsAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiSetsAccountsAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
