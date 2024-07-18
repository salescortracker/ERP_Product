import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvItemGroupsComponent } from './inv-item-groups.component';

describe('InvItemGroupsComponent', () => {
  let component: InvItemGroupsComponent;
  let fixture: ComponentFixture<InvItemGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvItemGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvItemGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
