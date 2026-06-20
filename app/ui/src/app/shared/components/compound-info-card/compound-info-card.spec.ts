import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundInfoCard } from './compound-info-card';

describe('CompoundInfoCard', () => {
  let component: CompoundInfoCard;
  let fixture: ComponentFixture<CompoundInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoundInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoundInfoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
