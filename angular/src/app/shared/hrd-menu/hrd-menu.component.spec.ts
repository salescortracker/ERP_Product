import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdMenuComponent } from './hrd-menu.component';

describe('HrdMenuComponent', () => {
  let component: HrdMenuComponent;
  let fixture: ComponentFixture<HrdMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
