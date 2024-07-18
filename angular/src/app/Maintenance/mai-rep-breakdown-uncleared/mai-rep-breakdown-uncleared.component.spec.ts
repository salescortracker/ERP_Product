import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepBreakdownUnclearedComponent } from './mai-rep-breakdown-uncleared.component';

describe('MaiRepBreakdownUnclearedComponent', () => {
  let component: MaiRepBreakdownUnclearedComponent;
  let fixture: ComponentFixture<MaiRepBreakdownUnclearedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepBreakdownUnclearedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepBreakdownUnclearedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
