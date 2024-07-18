import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvBranchToBranchStocksComponent } from './inv-branch-to-branch-stocks.component';

describe('InvBranchToBranchStocksComponent', () => {
  let component: InvBranchToBranchStocksComponent;
  let fixture: ComponentFixture<InvBranchToBranchStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvBranchToBranchStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvBranchToBranchStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
