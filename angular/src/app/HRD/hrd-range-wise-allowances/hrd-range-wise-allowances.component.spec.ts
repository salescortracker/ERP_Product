import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdRangeWiseAllowancesComponent } from './hrd-range-wise-allowances.component';

describe('HrdRangeWiseAllowancesComponent', () => {
  let component: HrdRangeWiseAllowancesComponent;
  let fixture: ComponentFixture<HrdRangeWiseAllowancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdRangeWiseAllowancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdRangeWiseAllowancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
