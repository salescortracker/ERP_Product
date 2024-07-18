import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvBranchToBranchConsumablesComponent } from './inv-branch-to-branch-consumables.component';

describe('InvBranchToBranchConsumablesComponent', () => {
  let component: InvBranchToBranchConsumablesComponent;
  let fixture: ComponentFixture<InvBranchToBranchConsumablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvBranchToBranchConsumablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvBranchToBranchConsumablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
