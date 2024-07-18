import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvConsumableProductionComponent } from './inv-consumable-production.component';

describe('InvConsumableProductionComponent', () => {
  let component: InvConsumableProductionComponent;
  let fixture: ComponentFixture<InvConsumableProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvConsumableProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvConsumableProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
