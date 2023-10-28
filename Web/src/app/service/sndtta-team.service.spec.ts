import { TestBed } from '@angular/core/testing';

import { SndttaTeamService } from './sndtta-team.service';

describe('SndttaTeamService', () => {
  let service: SndttaTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SndttaTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
