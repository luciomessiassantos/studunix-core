import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureDetails } from './lecture-details';

describe('LectureDetails', () => {
  let component: LectureDetails;
  let fixture: ComponentFixture<LectureDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectureDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectureDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
