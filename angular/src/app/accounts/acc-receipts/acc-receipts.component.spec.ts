import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccReceiptsComponent } from './acc-receipts.component';

describe('AccReceiptsComponent', () => {
  let component: AccReceiptsComponent;
  let fixture: ComponentFixture<AccReceiptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccReceiptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
