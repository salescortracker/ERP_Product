import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalDespatchClearancesComponent } from './sal-despatch-clearances.component';

describe('SalDespatchClearancesComponent', () => {
  let component: SalDespatchClearancesComponent;
  let fixture: ComponentFixture<SalDespatchClearancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalDespatchClearancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalDespatchClearancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
