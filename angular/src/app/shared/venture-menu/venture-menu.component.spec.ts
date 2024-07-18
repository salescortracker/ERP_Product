import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureMenuComponent } from './venture-menu.component';

describe('VentureMenuComponent', () => {
  let component: VentureMenuComponent;
  let fixture: ComponentFixture<VentureMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentureMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentureMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
