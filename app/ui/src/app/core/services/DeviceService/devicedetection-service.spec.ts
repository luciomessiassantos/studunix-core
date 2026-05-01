import { TestBed } from '@angular/core/testing';

import { DevicedetectionService } from './devicedetection-service';

describe('DevicedetectionService', () => {
  let service: DevicedetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicedetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
