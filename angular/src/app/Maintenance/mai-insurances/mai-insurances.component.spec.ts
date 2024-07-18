import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiInsurancesComponent } from './mai-insurances.component';

describe('MaiInsurancesComponent', () => {
  let component: MaiInsurancesComponent;
  let fixture: ComponentFixture<MaiInsurancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiInsurancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiInsurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
