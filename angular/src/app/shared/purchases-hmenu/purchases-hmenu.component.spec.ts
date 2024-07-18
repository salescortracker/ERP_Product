import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesHmenuComponent } from './purchases-hmenu.component';

describe('PurchasesHmenuComponent', () => {
  let component: PurchasesHmenuComponent;
  let fixture: ComponentFixture<PurchasesHmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesHmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesHmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
