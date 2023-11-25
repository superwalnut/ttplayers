import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMatchScoreStatsComponent } from './player-match-score-stats.component';

describe('PlayerMatchScoreStatsComponent', () => {
  let component: PlayerMatchScoreStatsComponent;
  let fixture: ComponentFixture<PlayerMatchScoreStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMatchScoreStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerMatchScoreStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
