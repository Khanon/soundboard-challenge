import { TestBed } from '@angular/core/testing';

import { SoundControllerService } from './sound-controller.service';

describe('SoundControllerService', () => {
  let service: SoundControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
