import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccSupplierAttachmentsComponent } from './acc-supplier-attachments.component';

describe('AccSupplierAttachmentsComponent', () => {
  let component: AccSupplierAttachmentsComponent;
  let fixture: ComponentFixture<AccSupplierAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccSupplierAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccSupplierAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
