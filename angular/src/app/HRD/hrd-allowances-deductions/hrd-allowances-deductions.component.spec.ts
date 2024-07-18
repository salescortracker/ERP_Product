import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdAllowancesDeductionsComponent } from './hrd-allowances-deductions.component';
describe('HrdAllowancesDeductionsComponent', () => {
  let component: HrdAllowancesDeductionsComponent;
  let fixture: ComponentFixture<HrdAllowancesDeductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdAllowancesDeductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdAllowancesDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
