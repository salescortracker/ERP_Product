import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdLayoutComponent } from './hrd-layout.component';

describe('HrdLayoutComponent', () => {
  let component: HrdLayoutComponent;
  let fixture: ComponentFixture<HrdLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
