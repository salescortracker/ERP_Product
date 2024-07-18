import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdShiftMastersComponent } from './hrd-shift-masters.component';

describe('HrdShiftMastersComponent', () => {
  let component: HrdShiftMastersComponent;
  let fixture: ComponentFixture<HrdShiftMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdShiftMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdShiftMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
