import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesCard } from './updates-card';

describe('UpdatesCard', () => {
  let component: UpdatesCard;
  let fixture: ComponentFixture<UpdatesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
