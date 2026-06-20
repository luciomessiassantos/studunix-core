import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersCalendar } from './reminders-calendar';

describe('RemindersCalendar', () => {
  let component: RemindersCalendar;
  let fixture: ComponentFixture<RemindersCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemindersCalendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemindersCalendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
