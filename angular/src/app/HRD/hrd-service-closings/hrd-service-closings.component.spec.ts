import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdServiceClosingsComponent } from './hrd-service-closings.component';

describe('HrdServiceClosingsComponent', () => {
  let component: HrdServiceClosingsComponent;
  let fixture: ComponentFixture<HrdServiceClosingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdServiceClosingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdServiceClosingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
