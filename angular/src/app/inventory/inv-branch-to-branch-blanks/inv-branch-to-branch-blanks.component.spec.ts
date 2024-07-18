import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvBranchToBranchBlanksComponent } from './inv-branch-to-branch-blanks.component';

describe('InvBranchToBranchBlanksComponent', () => {
  let component: InvBranchToBranchBlanksComponent;
  let fixture: ComponentFixture<InvBranchToBranchBlanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvBranchToBranchBlanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvBranchToBranchBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
