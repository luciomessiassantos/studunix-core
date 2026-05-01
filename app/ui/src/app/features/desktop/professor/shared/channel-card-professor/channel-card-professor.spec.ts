import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelCardProfessor } from './channel-card-professor';

describe('ChannelCardProfessor', () => {
  let component: ChannelCardProfessor;
  let fixture: ComponentFixture<ChannelCardProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelCardProfessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelCardProfessor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
