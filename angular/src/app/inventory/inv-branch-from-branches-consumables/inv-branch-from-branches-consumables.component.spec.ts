import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvBranchFromBranchesConsumablesComponent } from './inv-branch-from-branches-consumables.component';

describe('InvBranchFromBranchesConsumablesComponent', () => {
  let component: InvBranchFromBranchesConsumablesComponent;
  let fixture: ComponentFixture<InvBranchFromBranchesConsumablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvBranchFromBranchesConsumablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvBranchFromBranchesConsumablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
