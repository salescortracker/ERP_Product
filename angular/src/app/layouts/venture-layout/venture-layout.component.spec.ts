import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureLayoutComponent } from './venture-layout.component';

describe('VentureLayoutComponent', () => {
  let component: VentureLayoutComponent;
  let fixture: ComponentFixture<VentureLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentureLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentureLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
