import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFiltroComponent } from './consulta-filtro.component';

describe('ConsultaFiltroComponent', () => {
  let component: ConsultaFiltroComponent;
  let fixture: ComponentFixture<ConsultaFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
