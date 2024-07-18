import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccPartyDetailsComponent } from './acc-party-details.component';

describe('AccPartyDetailsComponent', () => {
  let component: AccPartyDetailsComponent;
  let fixture: ComponentFixture<AccPartyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccPartyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccPartyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
