import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfraccionesComponent } from './modal-infracciones.component';

describe('ModalInfraccionesComponent', () => {
  let component: ModalInfraccionesComponent;
  let fixture: ComponentFixture<ModalInfraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInfraccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInfraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
