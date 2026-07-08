import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssyncTables } from './assync-tables';

describe('AssyncTables', () => {
  let component: AssyncTables;
  let fixture: ComponentFixture<AssyncTables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssyncTables],
    }).compileComponents();

    fixture = TestBed.createComponent(AssyncTables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
