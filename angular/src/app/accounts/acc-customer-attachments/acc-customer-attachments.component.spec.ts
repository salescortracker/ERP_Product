import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccCustomerAttachmentsComponent } from './acc-customer-attachments.component';

describe('AccCustomerAttachmentsComponent', () => {
  let component: AccCustomerAttachmentsComponent;
  let fixture: ComponentFixture<AccCustomerAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccCustomerAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccCustomerAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
