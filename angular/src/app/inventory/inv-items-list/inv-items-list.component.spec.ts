import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvItemsListComponent } from './inv-items-list.component';

describe('InvItemsListComponent', () => {
  let component: InvItemsListComponent;
  let fixture: ComponentFixture<InvItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
