import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagFormatacao } from './tag-formatacao';

describe('TagFormatacao', () => {
  let component: TagFormatacao;
  let fixture: ComponentFixture<TagFormatacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagFormatacao],
    }).compileComponents();

    fixture = TestBed.createComponent(TagFormatacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
