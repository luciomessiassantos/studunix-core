import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAccessCard } from './recent-access-card';

describe('RecentAccess', () => {
  let component: RecentAccessCard;
  let fixture: ComponentFixture<RecentAccessCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentAccessCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentAccessCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
