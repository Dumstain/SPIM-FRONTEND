import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTablaInfraccionesComponent } from './consulta-tabla-infracciones.component';

describe('ConsultaTablaInfraccionesComponent', () => {
  let component: ConsultaTablaInfraccionesComponent;
  let fixture: ComponentFixture<ConsultaTablaInfraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaTablaInfraccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaTablaInfraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
