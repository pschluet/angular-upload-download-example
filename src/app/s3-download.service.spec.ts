import { TestBed } from '@angular/core/testing';

import { S3DownloadService } from './s3-download.service';

describe('S3DownloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: S3DownloadService = TestBed.get(S3DownloadService);
    expect(service).toBeTruthy();
  });
});
