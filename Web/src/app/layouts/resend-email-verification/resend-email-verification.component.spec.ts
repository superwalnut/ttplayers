import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendEmailVerificationComponent } from './resend-email-verification.component';

describe('ResendEmailVerificationComponent', () => {
  let component: ResendEmailVerificationComponent;
  let fixture: ComponentFixture<ResendEmailVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendEmailVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResendEmailVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
