import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAllOpponentsComponent } from './player-all-opponents.component';

describe('PlayerAllOpponentsComponent', () => {
  let component: PlayerAllOpponentsComponent;
  let fixture: ComponentFixture<PlayerAllOpponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerAllOpponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerAllOpponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
