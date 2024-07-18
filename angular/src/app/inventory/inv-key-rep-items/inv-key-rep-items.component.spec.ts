import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvKeyRepItemsComponent } from './inv-key-rep-items.component';

describe('InvKeyRepItemsComponent', () => {
  let component: InvKeyRepItemsComponent;
  let fixture: ComponentFixture<InvKeyRepItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvKeyRepItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvKeyRepItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
