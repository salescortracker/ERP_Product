import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvSampleOutwardsComponent } from './inv-sample-outwards.component';

describe('InvSampleOutwardsComponent', () => {
  let component: InvSampleOutwardsComponent;
  let fixture: ComponentFixture<InvSampleOutwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvSampleOutwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvSampleOutwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
