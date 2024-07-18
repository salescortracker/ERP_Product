import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvBranchFromBranchesBlanksComponent } from './inv-branch-from-branches-blanks.component';

describe('InvBranchFromBranchesBlanksComponent', () => {
  let component: InvBranchFromBranchesBlanksComponent;
  let fixture: ComponentFixture<InvBranchFromBranchesBlanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvBranchFromBranchesBlanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvBranchFromBranchesBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
