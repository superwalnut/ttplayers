import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMatchComponent } from './player-match.component';

describe('PlayerMatchComponent', () => {
  let component: PlayerMatchComponent;
  let fixture: ComponentFixture<PlayerMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
