import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListas } from './tag-listas';

describe('TagListas', () => {
  let component: TagListas;
  let fixture: ComponentFixture<TagListas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagListas],
    }).compileComponents();

    fixture = TestBed.createComponent(TagListas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
