import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorChannelCard } from './professor-channel-card';

describe('ProfessorChannelCard', () => {
  let component: ProfessorChannelCard;
  let fixture: ComponentFixture<ProfessorChannelCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorChannelCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorChannelCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
