import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubProfileContactUsComponent } from './club-profile-contact-us.component';

describe('ClubProfileContactUsComponent', () => {
  let component: ClubProfileContactUsComponent;
  let fixture: ComponentFixture<ClubProfileContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubProfileContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubProfileContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
