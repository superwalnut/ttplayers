import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubProfileHeaderComponent } from './club-profile-header.component';

describe('ClubProfileHeaderComponent', () => {
  let component: ClubProfileHeaderComponent;
  let fixture: ComponentFixture<ClubProfileHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubProfileHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
