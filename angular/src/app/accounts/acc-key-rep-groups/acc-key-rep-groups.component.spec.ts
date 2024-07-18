import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccKeyRepGroupsComponent } from './acc-key-rep-groups.component';

describe('AccKeyRepGroupsComponent', () => {
  let component: AccKeyRepGroupsComponent;
  let fixture: ComponentFixture<AccKeyRepGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccKeyRepGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccKeyRepGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
