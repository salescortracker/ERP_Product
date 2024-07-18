import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosunauthorizeComponent } from './posunauthorize.component';

describe('PosunauthorizeComponent', () => {
  let component: PosunauthorizeComponent;
  let fixture: ComponentFixture<PosunauthorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosunauthorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosunauthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
