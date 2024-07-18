import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismLayoutComponent } from './prism-layout.component';

describe('PrismLayoutComponent', () => {
  let component: PrismLayoutComponent;
  let fixture: ComponentFixture<PrismLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
