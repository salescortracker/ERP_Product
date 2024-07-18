import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosoutletsComponent } from './posoutlets.component';

describe('PosoutletsComponent', () => {
  let component: PosoutletsComponent;
  let fixture: ComponentFixture<PosoutletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosoutletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosoutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
