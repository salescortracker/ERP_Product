import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMDashBoardBlanksComponent } from './crmdash-board-blanks.component';

describe('CRMDashBoardBlanksComponent', () => {
  let component: CRMDashBoardBlanksComponent;
  let fixture: ComponentFixture<CRMDashBoardBlanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRMDashBoardBlanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRMDashBoardBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
