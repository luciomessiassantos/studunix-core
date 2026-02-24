import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsTable } from './submissions-table';

describe('SubmissionsTable', () => {
  let component: SubmissionsTable;
  let fixture: ComponentFixture<SubmissionsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
