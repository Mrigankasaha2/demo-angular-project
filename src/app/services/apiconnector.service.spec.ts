import { TestBed } from '@angular/core/testing';

import { ApiconnectorService } from './apiconnector.service';

describe('ApiconnectorService', () => {
  let service: ApiconnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
