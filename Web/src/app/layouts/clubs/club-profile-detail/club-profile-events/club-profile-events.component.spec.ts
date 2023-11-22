import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubProfileEventsComponent } from './club-profile-events.component';

describe('ClubProfileEventsComponent', () => {
  let component: ClubProfileEventsComponent;
  let fixture: ComponentFixture<ClubProfileEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubProfileEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubProfileEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
