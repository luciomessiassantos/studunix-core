import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesLayout } from './modules-layout';

describe('ModulesLayout', () => {
  let component: ModulesLayout;
  let fixture: ComponentFixture<ModulesLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
