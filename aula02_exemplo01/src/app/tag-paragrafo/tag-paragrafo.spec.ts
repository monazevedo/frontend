import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagParagrafo } from './tag-paragrafo';

describe('TagParagrafo', () => {
  let component: TagParagrafo;
  let fixture: ComponentFixture<TagParagrafo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagParagrafo],
    }).compileComponents();

    fixture = TestBed.createComponent(TagParagrafo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
