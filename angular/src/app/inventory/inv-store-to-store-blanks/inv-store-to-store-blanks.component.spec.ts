import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvStoreToStoreBlanksComponent } from './inv-store-to-store-blanks.component';

describe('InvStoreToStoreBlanksComponent', () => {
  let component: InvStoreToStoreBlanksComponent;
  let fixture: ComponentFixture<InvStoreToStoreBlanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvStoreToStoreBlanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvStoreToStoreBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
