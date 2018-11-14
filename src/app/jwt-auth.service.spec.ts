import { TestBed, inject } from '@angular/core/testing';

import { JWTAuthService } from './jwt-auth.service';

describe('JWTAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JWTAuthService]
    });
  });

  it('should be created', inject([JWTAuthService], (service: JWTAuthService) => {
    expect(service).toBeTruthy();
  }));
});
