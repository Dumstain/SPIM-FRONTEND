import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraccionesAgregadasComponent } from './infracciones-agregadas.component';

describe('InfraccionesAgregadasComponent', () => {
  let component: InfraccionesAgregadasComponent;
  let fixture: ComponentFixture<InfraccionesAgregadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraccionesAgregadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraccionesAgregadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
