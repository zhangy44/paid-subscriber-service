import { TestBed } from '@angular/core/testing';

import { UserinteractionService } from './userinteraction.service';

describe('UserinteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserinteractionService = TestBed.get(UserinteractionService);
    expect(service).toBeTruthy();
  });
});
