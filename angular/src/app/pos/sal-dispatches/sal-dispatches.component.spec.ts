import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalDispatchesComponent } from './sal-dispatches.component';

describe('SalDispatchesComponent', () => {
  let component: SalDispatchesComponent;
  let fixture: ComponentFixture<SalDispatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalDispatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalDispatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
