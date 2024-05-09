import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaIncorrectaComponent } from './busqueda-incorrecta.component';

describe('BusquedaIncorrectaComponent', () => {
  let component: BusquedaIncorrectaComponent;
  let fixture: ComponentFixture<BusquedaIncorrectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaIncorrectaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaIncorrectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
