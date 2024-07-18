import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvLossesListComponent } from './inv-losses-list.component';

describe('InvLossesListComponent', () => {
  let component: InvLossesListComponent;
  let fixture: ComponentFixture<InvLossesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvLossesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvLossesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
