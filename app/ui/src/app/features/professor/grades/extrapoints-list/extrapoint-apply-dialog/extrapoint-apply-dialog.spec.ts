import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrapointApplyDialog } from './extrapoint-apply-dialog';

describe('ExtrapointApplyDialog', () => {
  let component: ExtrapointApplyDialog;
  let fixture: ComponentFixture<ExtrapointApplyDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtrapointApplyDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrapointApplyDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
