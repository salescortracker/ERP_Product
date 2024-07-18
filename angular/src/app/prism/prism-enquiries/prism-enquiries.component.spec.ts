import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismEnquiriesComponent } from './prism-enquiries.component';

describe('PrismEnquiriesComponent', () => {
  let component: PrismEnquiriesComponent;
  let fixture: ComponentFixture<PrismEnquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismEnquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
