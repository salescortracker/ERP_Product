import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismMenuComponent } from './prism-menu.component';

describe('PrismMenuComponent', () => {
  let component: PrismMenuComponent;
  let fixture: ComponentFixture<PrismMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
