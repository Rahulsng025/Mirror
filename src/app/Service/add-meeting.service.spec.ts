import { TestBed } from '@angular/core/testing';

import { AddMeetingService } from './add-meeting.service';

describe('AddMeetingService', () => {
  let service: AddMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
