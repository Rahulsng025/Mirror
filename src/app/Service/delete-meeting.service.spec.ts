import { TestBed } from '@angular/core/testing';

import { DeleteMeetingService } from './delete-meeting.service';

describe('DeleteMeetingService', () => {
  let service: DeleteMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
