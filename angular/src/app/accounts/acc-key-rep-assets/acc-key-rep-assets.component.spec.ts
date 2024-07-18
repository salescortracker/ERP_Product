import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccKeyRepAssetsComponent } from './acc-key-rep-assets.component';

describe('AccKeyRepAssetsComponent', () => {
  let component: AccKeyRepAssetsComponent;
  let fixture: ComponentFixture<AccKeyRepAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccKeyRepAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccKeyRepAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
