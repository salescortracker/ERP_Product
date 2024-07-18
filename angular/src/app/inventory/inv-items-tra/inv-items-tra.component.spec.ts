import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvItemsTraComponent } from './inv-items-tra.component';

describe('InvItemsTraComponent', () => {
  let component: InvItemsTraComponent;
  let fixture: ComponentFixture<InvItemsTraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvItemsTraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvItemsTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
