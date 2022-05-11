import { TestBed } from '@angular/core/testing';

import { JobCondServiceService } from './job-cond-service.service';

describe('JobCondServiceService', () => {
  let service: JobCondServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobCondServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
