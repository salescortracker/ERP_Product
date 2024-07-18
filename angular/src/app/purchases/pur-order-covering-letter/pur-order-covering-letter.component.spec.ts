import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurOrderCoveringLetterComponent } from './pur-order-covering-letter.component';

describe('PurOrderCoveringLetterComponent', () => {
  let component: PurOrderCoveringLetterComponent;
  let fixture: ComponentFixture<PurOrderCoveringLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurOrderCoveringLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurOrderCoveringLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
