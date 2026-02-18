import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerTabs } from './inner-tabs';

describe('InnerTabs', () => {
  let component: InnerTabs;
  let fixture: ComponentFixture<InnerTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
