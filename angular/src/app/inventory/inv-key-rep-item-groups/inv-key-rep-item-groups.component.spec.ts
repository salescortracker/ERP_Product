import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvKeyRepItemGroupsComponent } from './inv-key-rep-item-groups.component';

describe('InvKeyRepItemGroupsComponent', () => {
  let component: InvKeyRepItemGroupsComponent;
  let fixture: ComponentFixture<InvKeyRepItemGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvKeyRepItemGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvKeyRepItemGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
