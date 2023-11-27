import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMatchScoreStatsItemThreeSetsComponent } from './player-match-score-stats-item-three-sets.component';

describe('PlayerMatchScoreStatsItemThreeSetsComponent', () => {
  let component: PlayerMatchScoreStatsItemThreeSetsComponent;
  let fixture: ComponentFixture<PlayerMatchScoreStatsItemThreeSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMatchScoreStatsItemThreeSetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerMatchScoreStatsItemThreeSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
