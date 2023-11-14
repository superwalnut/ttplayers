import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListTileComponent } from './player-list-tile.component';

describe('PlayerListTileComponent', () => {
  let component: PlayerListTileComponent;
  let fixture: ComponentFixture<PlayerListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerListTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
