import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFixedMobileMenuComponent } from './footer-fixed-mobile-menu.component';

describe('FooterFixedMobileMenuComponent', () => {
  let component: FooterFixedMobileMenuComponent;
  let fixture: ComponentFixture<FooterFixedMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFixedMobileMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterFixedMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
