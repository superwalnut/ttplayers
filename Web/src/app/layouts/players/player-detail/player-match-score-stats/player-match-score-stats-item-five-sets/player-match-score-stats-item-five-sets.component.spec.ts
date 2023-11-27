import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMatchScoreStatsItemFiveSetsComponent } from './player-match-score-stats-item-five-sets.component';

describe('PlayerMatchScoreStatsItemFiveSetsComponent', () => {
  let component: PlayerMatchScoreStatsItemFiveSetsComponent;
  let fixture: ComponentFixture<PlayerMatchScoreStatsItemFiveSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMatchScoreStatsItemFiveSetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerMatchScoreStatsItemFiveSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
