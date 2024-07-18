import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcProcessWiseProductionComponent } from './ppc-process-wise-production.component';

describe('PpcProcessWiseProductionComponent', () => {
  let component: PpcProcessWiseProductionComponent;
  let fixture: ComponentFixture<PpcProcessWiseProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcProcessWiseProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcProcessWiseProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
