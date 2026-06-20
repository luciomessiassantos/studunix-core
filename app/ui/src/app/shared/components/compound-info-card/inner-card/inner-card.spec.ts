import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerCard } from './inner-card';

describe('InnerCard', () => {
  let component: InnerCard;
  let fixture: ComponentFixture<InnerCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
