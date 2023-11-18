import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWinRateComponent } from './player-win-rate.component';

describe('PlayerWinRateComponent', () => {
  let component: PlayerWinRateComponent;
  let fixture: ComponentFixture<PlayerWinRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerWinRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerWinRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
