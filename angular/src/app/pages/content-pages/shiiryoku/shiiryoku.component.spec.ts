import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiiryokuComponent } from './shiiryoku.component';

describe('ShiiryokuComponent', () => {
  let component: ShiiryokuComponent;
  let fixture: ComponentFixture<ShiiryokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiiryokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiiryokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
