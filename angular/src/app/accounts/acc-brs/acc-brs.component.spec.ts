import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccBRSComponent } from './acc-brs.component';

describe('AccBRSComponent', () => {
  let component: AccBRSComponent;
  let fixture: ComponentFixture<AccBRSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccBRSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccBRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
