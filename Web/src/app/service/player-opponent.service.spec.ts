import { TestBed } from '@angular/core/testing';

import { PlayerOpponentService } from './player-opponent.service';

describe('PlayerOpponentService', () => {
  let service: PlayerOpponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerOpponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
