import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismTicketingComponent } from './prism-ticketing.component';

describe('PrismTicketingComponent', () => {
  let component: PrismTicketingComponent;
  let fixture: ComponentFixture<PrismTicketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismTicketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismTicketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
