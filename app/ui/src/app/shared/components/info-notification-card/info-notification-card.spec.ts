import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNotificationCard } from './info-notification-card';

describe('InfoNotificationCard', () => {
  let component: InfoNotificationCard;
  let fixture: ComponentFixture<InfoNotificationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoNotificationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoNotificationCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
