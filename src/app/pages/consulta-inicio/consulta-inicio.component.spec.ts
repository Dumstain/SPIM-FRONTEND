import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaInicioComponent } from './consulta-inicio.component';

describe('ConsultaInicioComponent', () => {
  let component: ConsultaInicioComponent;
  let fixture: ComponentFixture<ConsultaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
