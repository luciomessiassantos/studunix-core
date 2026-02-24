import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeEditDialog } from './grade-edit-dialog';

describe('GradeEditDialog', () => {
  let component: GradeEditDialog;
  let fixture: ComponentFixture<GradeEditDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeEditDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeEditDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
