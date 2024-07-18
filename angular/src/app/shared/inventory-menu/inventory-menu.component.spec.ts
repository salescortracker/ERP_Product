import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMenuComponent } from './inventory-menu.component';

describe('InventoryMenuComponent', () => {
  let component: InventoryMenuComponent;
  let fixture: ComponentFixture<InventoryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
