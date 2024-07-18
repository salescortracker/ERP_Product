import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismpostFollowUpComponent } from './prismpost-follow-up.component';

describe('PrismpostFollowUpComponent', () => {
  let component: PrismpostFollowUpComponent;
  let fixture: ComponentFixture<PrismpostFollowUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismpostFollowUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismpostFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
