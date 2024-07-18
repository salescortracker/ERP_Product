import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismRegistersComponent } from './prism-registers.component';

describe('PrismRegistersComponent', () => {
  let component: PrismRegistersComponent;
  let fixture: ComponentFixture<PrismRegistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
