import { TestBed } from '@angular/core/testing';

import { ClubCustomiseService } from './club-customise.service';

describe('ClubCustomiseService', () => {
  let service: ClubCustomiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubCustomiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
