import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvLossesTraComponent } from './inv-losses-tra.component';

describe('InvLossesTraComponent', () => {
  let component: InvLossesTraComponent;
  let fixture: ComponentFixture<InvLossesTraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvLossesTraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvLossesTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
