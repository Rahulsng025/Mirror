import { TestBed } from '@angular/core/testing';

import { UpdateMeetingService } from './update-meeting.service';

describe('UpdateMeetingService', () => {
  let service: UpdateMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
