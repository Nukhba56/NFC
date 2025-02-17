import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcPageComponent } from './nfc-page.component';

describe('NfcPageComponent', () => {
  let component: NfcPageComponent;
  let fixture: ComponentFixture<NfcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NfcPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
