import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvKeyRepUnitsComponent } from './inv-key-rep-units.component';

describe('InvKeyRepUnitsComponent', () => {
  let component: InvKeyRepUnitsComponent;
  let fixture: ComponentFixture<InvKeyRepUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvKeyRepUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvKeyRepUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
