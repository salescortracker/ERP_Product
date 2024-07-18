import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdAbsentsComponent } from './hrd-absents.component';

describe('HrdAbsentsComponent', () => {
  let component: HrdAbsentsComponent;
  let fixture: ComponentFixture<HrdAbsentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdAbsentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdAbsentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
