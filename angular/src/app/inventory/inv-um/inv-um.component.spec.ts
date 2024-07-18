import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvUMComponent } from './inv-um.component';

describe('InvUMComponent', () => {
  let component: InvUMComponent;
  let fixture: ComponentFixture<InvUMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvUMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvUMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
