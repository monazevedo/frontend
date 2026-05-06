import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagLinks } from './tag-links';

describe('TagLinks', () => {
  let component: TagLinks;
  let fixture: ComponentFixture<TagLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagLinks],
    }).compileComponents();

    fixture = TestBed.createComponent(TagLinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
