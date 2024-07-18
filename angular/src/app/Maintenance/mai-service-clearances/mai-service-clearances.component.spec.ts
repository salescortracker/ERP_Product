import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiServiceClearancesComponent } from './mai-service-clearances.component';

describe('MaiServiceClearancesComponent', () => {
  let component: MaiServiceClearancesComponent;
  let fixture: ComponentFixture<MaiServiceClearancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiServiceClearancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiServiceClearancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
