import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOpponentComponent } from './player-opponent.component';

describe('PlayerOpponentComponent', () => {
  let component: PlayerOpponentComponent;
  let fixture: ComponentFixture<PlayerOpponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerOpponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerOpponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
