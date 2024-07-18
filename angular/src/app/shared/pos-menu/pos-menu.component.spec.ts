import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosMenuComponent } from './pos-menu.component';

describe('PosMenuComponent', () => {
  let component: PosMenuComponent;
  let fixture: ComponentFixture<PosMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
