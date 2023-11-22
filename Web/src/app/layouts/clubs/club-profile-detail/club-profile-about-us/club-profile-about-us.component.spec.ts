import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubProfileAboutUsComponent } from './club-profile-about-us.component';

describe('ClubProfileAboutUsComponent', () => {
  let component: ClubProfileAboutUsComponent;
  let fixture: ComponentFixture<ClubProfileAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubProfileAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubProfileAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
