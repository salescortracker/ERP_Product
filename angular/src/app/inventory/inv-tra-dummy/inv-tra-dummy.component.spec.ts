import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvTraDummyComponent } from './inv-tra-dummy.component';

describe('InvTraDummyComponent', () => {
  let component: InvTraDummyComponent;
  let fixture: ComponentFixture<InvTraDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvTraDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvTraDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
