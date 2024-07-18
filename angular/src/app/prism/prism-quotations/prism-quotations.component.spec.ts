import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismQuotationsComponent } from './prism-quotations.component';

describe('PrismQuotationsComponent', () => {
  let component: PrismQuotationsComponent;
  let fixture: ComponentFixture<PrismQuotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismQuotationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
