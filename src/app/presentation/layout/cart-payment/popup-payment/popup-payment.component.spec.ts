import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPaymentComponent } from './popup-payment.component';

describe('PopupPaymentComponent', () => {
  let component: PopupPaymentComponent;
  let fixture: ComponentFixture<PopupPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
