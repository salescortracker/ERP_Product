import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismComplaintsComponent } from './prism-complaints.component';

describe('PrismComplaintsComponent', () => {
  let component: PrismComplaintsComponent;
  let fixture: ComponentFixture<PrismComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
