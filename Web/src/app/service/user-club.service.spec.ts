import { TestBed } from '@angular/core/testing';

import { UserClubService } from './user-club.service';

describe('UserClubService', () => {
  let service: UserClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
