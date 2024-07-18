import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PprProductWiseDetailsComponent } from './ppr-product-wise-details.component';

describe('PprProductWiseDetailsComponent', () => {
  let component: PprProductWiseDetailsComponent;
  let fixture: ComponentFixture<PprProductWiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PprProductWiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PprProductWiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
