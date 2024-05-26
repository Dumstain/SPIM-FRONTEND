import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Infraccion {
  descripcion: string;
  articulo: string;
  uma: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfraccionesService {
  private infraccionesSource = new BehaviorSubject<Infraccion[]>([]);
  infracciones$ = this.infraccionesSource.asObservable();

  constructor() { }

  addInfraccion(infraccion: Infraccion) {
    const infracciones = this.infraccionesSource.value;
    this.infraccionesSource.next([...infracciones, infraccion]);
  }

  removeInfraccion(infraccion: Infraccion) {
    const infracciones = this.infraccionesSource.value.filter(i => i !== infraccion);
    this.infraccionesSource.next(infracciones);
  }
}
