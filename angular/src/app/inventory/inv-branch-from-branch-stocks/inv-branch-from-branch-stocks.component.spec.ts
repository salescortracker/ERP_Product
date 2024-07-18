import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvBranchFromBranchStocksComponent } from './inv-branch-from-branch-stocks.component';

describe('InvBranchFromBranchStocksComponent', () => {
  let component: InvBranchFromBranchStocksComponent;
  let fixture: ComponentFixture<InvBranchFromBranchStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvBranchFromBranchStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvBranchFromBranchStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
