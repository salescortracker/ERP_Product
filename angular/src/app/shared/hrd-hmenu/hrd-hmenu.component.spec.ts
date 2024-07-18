import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdHMenuComponent } from './hrd-hmenu.component';

describe('HrdHMenuComponent', () => {
  let component: HrdHMenuComponent;
  let fixture: ComponentFixture<HrdHMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdHMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdHMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
