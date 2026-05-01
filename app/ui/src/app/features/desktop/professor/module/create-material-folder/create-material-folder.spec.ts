import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaterialFolder } from './create-material-folder';

describe('CreateMaterialFolder', () => {
  let component: CreateMaterialFolder;
  let fixture: ComponentFixture<CreateMaterialFolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMaterialFolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMaterialFolder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
