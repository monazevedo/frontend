import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interpolacao } from './interpolacao';

describe('Interpolacao', () => {
  let component: Interpolacao;
  let fixture: ComponentFixture<Interpolacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interpolacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Interpolacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
