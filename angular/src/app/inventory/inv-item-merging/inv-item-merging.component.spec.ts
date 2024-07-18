import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvItemMergingComponent } from './inv-item-merging.component';

describe('InvItemMergingComponent', () => {
  let component: InvItemMergingComponent;
  let fixture: ComponentFixture<InvItemMergingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvItemMergingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvItemMergingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
