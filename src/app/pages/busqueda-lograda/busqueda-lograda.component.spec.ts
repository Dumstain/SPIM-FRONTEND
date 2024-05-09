import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaLogradaComponent } from './busqueda-lograda.component';

describe('BusquedaLogradaComponent', () => {
  let component: BusquedaLogradaComponent;
  let fixture: ComponentFixture<BusquedaLogradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaLogradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaLogradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
