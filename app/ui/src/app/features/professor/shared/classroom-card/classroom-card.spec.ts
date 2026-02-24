import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomCard } from './classroom-card';

describe('ClassroomCard', () => {
  let component: ClassroomCard;
  let fixture: ComponentFixture<ClassroomCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
