import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMatchScoreStatsItemSevenSetsComponent } from './player-match-score-stats-item-seven-sets.component';

describe('PlayerMatchScoreStatsItemSevenSetsComponent', () => {
  let component: PlayerMatchScoreStatsItemSevenSetsComponent;
  let fixture: ComponentFixture<PlayerMatchScoreStatsItemSevenSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMatchScoreStatsItemSevenSetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerMatchScoreStatsItemSevenSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
