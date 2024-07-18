import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurAdvancesComponent } from './pur-advances.component';

describe('PurAdvancesComponent', () => {
  let component: PurAdvancesComponent;
  let fixture: ComponentFixture<PurAdvancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurAdvancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurAdvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
