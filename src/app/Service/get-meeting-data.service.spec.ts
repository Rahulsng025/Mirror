import { TestBed } from '@angular/core/testing';

import { GetMeetingDataService } from './get-meeting-data.service';

describe('GetMeetingDataService', () => {
  let service: GetMeetingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMeetingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
