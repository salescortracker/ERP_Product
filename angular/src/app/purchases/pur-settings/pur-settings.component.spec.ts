import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurSettingsComponent } from './pur-settings.component';

describe('PurSettingsComponent', () => {
  let component: PurSettingsComponent;
  let fixture: ComponentFixture<PurSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
