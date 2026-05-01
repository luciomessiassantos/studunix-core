import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomCardEdit } from './classroom-card-edit';

describe('ClassroomCardEdit', () => {
  let component: ClassroomCardEdit;
  let fixture: ComponentFixture<ClassroomCardEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomCardEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomCardEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
