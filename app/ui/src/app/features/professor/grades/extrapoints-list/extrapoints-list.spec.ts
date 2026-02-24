import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrapointsList } from './extrapoints-list';

describe('ExtrapointsList', () => {
  let component: ExtrapointsList;
  let fixture: ComponentFixture<ExtrapointsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtrapointsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrapointsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
