import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccTransfersComponent } from './acc-transfers.component';

describe('AccTransfersComponent', () => {
  let component: AccTransfersComponent;
  let fixture: ComponentFixture<AccTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
