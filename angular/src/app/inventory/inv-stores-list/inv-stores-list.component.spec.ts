import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvStoresListComponent } from './inv-stores-list.component';

describe('InvStoresListComponent', () => {
  let component: InvStoresListComponent;
  let fixture: ComponentFixture<InvStoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvStoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvStoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
