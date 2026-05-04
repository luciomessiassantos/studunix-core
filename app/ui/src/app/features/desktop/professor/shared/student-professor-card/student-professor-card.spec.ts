import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfessorCard } from './student-professor-card';

describe('StudentProfessorCard', () => {
  let component: StudentProfessorCard;
  let fixture: ComponentFixture<StudentProfessorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfessorCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfessorCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
