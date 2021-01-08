import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
