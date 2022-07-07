import { TestBed } from '@angular/core/testing';

import { DataMobilityService } from './data-mobility.service';

describe('DataMobilityService', () => {
  let service: DataMobilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMobilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
