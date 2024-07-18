import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurMailSettingsComponent } from './pur-mail-settings.component';

describe('PurMailSettingsComponent', () => {
  let component: PurMailSettingsComponent;
  let fixture: ComponentFixture<PurMailSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurMailSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurMailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
