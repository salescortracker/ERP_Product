import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiBreakdownsComponent } from './mai-breakdowns.component';

describe('MaiBreakdownsComponent', () => {
  let component: MaiBreakdownsComponent;
  let fixture: ComponentFixture<MaiBreakdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiBreakdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiBreakdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
