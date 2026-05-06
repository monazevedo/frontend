import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsH } from './tags-h';

describe('TagsH', () => {
  let component: TagsH;
  let fixture: ComponentFixture<TagsH>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsH],
    }).compileComponents();

    fixture = TestBed.createComponent(TagsH);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
