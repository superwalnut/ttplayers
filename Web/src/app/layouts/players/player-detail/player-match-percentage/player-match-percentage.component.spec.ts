import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMatchPercentageComponent } from './player-match-percentage.component';

describe('PlayerMatchPercentageComponent', () => {
  let component: PlayerMatchPercentageComponent;
  let fixture: ComponentFixture<PlayerMatchPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMatchPercentageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerMatchPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
