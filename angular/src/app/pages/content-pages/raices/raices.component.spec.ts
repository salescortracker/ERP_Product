import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaicesComponent } from './raices.component';

describe('RaicesComponent', () => {
  let component: RaicesComponent;
  let fixture: ComponentFixture<RaicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
