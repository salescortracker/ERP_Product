import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurEnquiryCoveringLetterComponent } from './pur-enquiry-covering-letter.component';

describe('PurEnquiryCoveringLetterComponent', () => {
  let component: PurEnquiryCoveringLetterComponent;
  let fixture: ComponentFixture<PurEnquiryCoveringLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurEnquiryCoveringLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurEnquiryCoveringLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
