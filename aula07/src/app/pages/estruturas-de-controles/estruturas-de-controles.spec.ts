import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturasDeControles } from './estruturas-de-controles';

describe('EstruturasDeControles', () => {
  let component: EstruturasDeControles;
  let fixture: ComponentFixture<EstruturasDeControles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstruturasDeControles],
    }).compileComponents();

    fixture = TestBed.createComponent(EstruturasDeControles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
