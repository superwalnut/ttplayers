import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubProfilePlayersComponent } from './club-profile-players.component';

describe('ClubProfilePlayersComponent', () => {
  let component: ClubProfilePlayersComponent;
  let fixture: ComponentFixture<ClubProfilePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubProfilePlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubProfilePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
