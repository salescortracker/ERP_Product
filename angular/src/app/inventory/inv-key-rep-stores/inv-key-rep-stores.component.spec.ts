import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvKeyRepStoresComponent } from './inv-key-rep-stores.component';

describe('InvKeyRepStoresComponent', () => {
  let component: InvKeyRepStoresComponent;
  let fixture: ComponentFixture<InvKeyRepStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvKeyRepStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvKeyRepStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
