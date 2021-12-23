import { TestBed } from '@angular/core/testing';

import { ApiCommsService } from './api-comms.service';

describe('ApiCommsService', () => {
  let service: ApiCommsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCommsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
