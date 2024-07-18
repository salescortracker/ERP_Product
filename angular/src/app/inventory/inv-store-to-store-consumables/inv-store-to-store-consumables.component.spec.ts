import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvStoreToStoreConsumablesComponent } from './inv-store-to-store-consumables.component';

describe('InvStoreToStoreConsumablesComponent', () => {
  let component: InvStoreToStoreConsumablesComponent;
  let fixture: ComponentFixture<InvStoreToStoreConsumablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvStoreToStoreConsumablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvStoreToStoreConsumablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
