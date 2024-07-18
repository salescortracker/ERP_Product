import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdAdvancesComponent } from './hrd-advances.component';

describe('HrdAdvancesComponent', () => {
  let component: HrdAdvancesComponent;
  let fixture: ComponentFixture<HrdAdvancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdAdvancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdAdvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
