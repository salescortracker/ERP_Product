import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioHomeScreenComponent } from './comercio-home-screen.component';

describe('ComercioHomeScreenComponent', () => {
  let component: ComercioHomeScreenComponent;
  let fixture: ComponentFixture<ComercioHomeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercioHomeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercioHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
