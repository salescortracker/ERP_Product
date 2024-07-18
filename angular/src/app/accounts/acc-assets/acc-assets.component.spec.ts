import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccAssetsComponent } from './acc-assets.component';

describe('AccAssetsComponent', () => {
  let component: AccAssetsComponent;
  let fixture: ComponentFixture<AccAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
