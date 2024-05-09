import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeProgresoComponent } from './barra-de-progreso.component';

describe('BarraDeProgresoComponent', () => {
  let component: BarraDeProgresoComponent;
  let fixture: ComponentFixture<BarraDeProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDeProgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraDeProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
