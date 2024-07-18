import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShikshaComponent } from './shiksha.component';

describe('ShikshaComponent', () => {
  let component: ShikshaComponent;
  let fixture: ComponentFixture<ShikshaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShikshaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShikshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
