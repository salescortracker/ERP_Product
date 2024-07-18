import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhanwantariComponent } from './dhanwantari.component';

describe('DhanwantariComponent', () => {
  let component: DhanwantariComponent;
  let fixture: ComponentFixture<DhanwantariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhanwantariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhanwantariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
