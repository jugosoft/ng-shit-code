import { TestBed } from '@angular/core/testing';

import { RandomAccessGuard } from './random-access.guard';

describe('RandomAccessGuard', () => {
  let guard: RandomAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RandomAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
