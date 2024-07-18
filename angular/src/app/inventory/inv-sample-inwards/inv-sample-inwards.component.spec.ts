import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvSampleInwardsComponent } from './inv-sample-inwards.component';

describe('InvSampleInwardsComponent', () => {
  let component: InvSampleInwardsComponent;
  let fixture: ComponentFixture<InvSampleInwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvSampleInwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvSampleInwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
