import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsTree } from './materials-tree';

describe('MaterialsTree', () => {
  let component: MaterialsTree;
  let fixture: ComponentFixture<MaterialsTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialsTree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsTree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
