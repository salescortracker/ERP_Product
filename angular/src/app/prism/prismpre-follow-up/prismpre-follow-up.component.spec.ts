import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismpreFollowUpComponent } from './prismpre-follow-up.component';

describe('PrismpreFollowUpComponent', () => {
  let component: PrismpreFollowUpComponent;
  let fixture: ComponentFixture<PrismpreFollowUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismpreFollowUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismpreFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
