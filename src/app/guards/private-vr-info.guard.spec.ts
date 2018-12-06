import { TestBed } from '@angular/core/testing';

import { PrivateVrInfoGuard } from './private-vr-info.guard';

describe('PrivateVrInfoGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivateVrInfoGuard = TestBed.get(PrivateVrInfoGuard);
    expect(service).toBeTruthy();
  });
});
