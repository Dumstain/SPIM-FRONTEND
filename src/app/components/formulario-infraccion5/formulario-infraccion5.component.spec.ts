import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInfraccion5Component } from './formulario-infraccion5.component';

describe('FormularioInfraccion5Component', () => {
  let component: FormularioInfraccion5Component;
  let fixture: ComponentFixture<FormularioInfraccion5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioInfraccion5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioInfraccion5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
