import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiAMCComponent } from './mai-amc.component';

describe('MaiAMCComponent', () => {
  let component: MaiAMCComponent;
  let fixture: ComponentFixture<MaiAMCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiAMCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiAMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
