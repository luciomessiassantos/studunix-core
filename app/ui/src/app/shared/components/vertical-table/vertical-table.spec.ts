import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTable } from './vertical-table';

describe('VerticalTable', () => {
  let component: VerticalTable;
  let fixture: ComponentFixture<VerticalTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
