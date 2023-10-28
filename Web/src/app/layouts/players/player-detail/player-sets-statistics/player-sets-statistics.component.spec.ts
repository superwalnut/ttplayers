import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSetsStatisticsComponent } from './player-sets-statistics.component';

describe('PlayerSetsStatisticsComponent', () => {
  let component: PlayerSetsStatisticsComponent;
  let fixture: ComponentFixture<PlayerSetsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSetsStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSetsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
