import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvOpeningShikshaComponent } from './inv-opening-shiksha.component';

describe('InvOpeningShikshaComponent', () => {
  let component: InvOpeningShikshaComponent;
  let fixture: ComponentFixture<InvOpeningShikshaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvOpeningShikshaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvOpeningShikshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
