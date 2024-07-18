import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvCostRepClosingValuesComponent } from './inv-cost-rep-closing-values.component';

describe('InvCostRepClosingValuesComponent', () => {
  let component: InvCostRepClosingValuesComponent;
  let fixture: ComponentFixture<InvCostRepClosingValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvCostRepClosingValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvCostRepClosingValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
