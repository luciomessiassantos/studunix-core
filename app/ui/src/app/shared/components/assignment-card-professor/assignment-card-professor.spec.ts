import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCardProfessor } from './assignment-card-professor';

describe('AssignmentCardProfessor', () => {
  let component: AssignmentCardProfessor;
  let fixture: ComponentFixture<AssignmentCardProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentCardProfessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentCardProfessor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
