import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdLeavesComponent } from './hrd-leaves.component';

describe('HrdLeavesComponent', () => {
  let component: HrdLeavesComponent;
  let fixture: ComponentFixture<HrdLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
