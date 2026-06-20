import { TestBed } from '@angular/core/testing';

import { StudentAnaliticsService } from './student-analitics-service';

describe('StudentAnaliticsService', () => {
  let service: StudentAnaliticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentAnaliticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
