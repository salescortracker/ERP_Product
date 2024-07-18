import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvKeyRepLossesComponent } from './inv-key-rep-losses.component';

describe('InvKeyRepLossesComponent', () => {
  let component: InvKeyRepLossesComponent;
  let fixture: ComponentFixture<InvKeyRepLossesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvKeyRepLossesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvKeyRepLossesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
