import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInfraccionComponent } from './lista-infraccion.component';

describe('ListaInfraccionComponent', () => {
  let component: ListaInfraccionComponent;
  let fixture: ComponentFixture<ListaInfraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInfraccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInfraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
