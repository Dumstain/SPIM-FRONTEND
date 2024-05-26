import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface Infraccion {
  conjunto_id: number;
  articulo: string;
  fraccion: string;
  inciso: string;
  motivo: string;
  observaciones: string;
  imagenUrl1?: string;
  imagenUrl2?: string;
  imagenUrl3?: string;
  imagenUrl4?: string;
}

export interface HistorialItem {
  agrupacion_id: number;
  folio: string;
  fecha_procesada: string;
  infractor_nombre: string;
  marca: string;
  linea: string;
  modelo: number;
  tipos: string;
  color: string;
  placas: string;
  estado: string;
  infracciones: Infraccion[];
  imagenes: {
    foto1: string;
    foto2: string;
    foto3: string;
    foto4: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class HistorialJuezService {
  private apiUrl = 'http://localhost:3000/api/historial-juez'; // URL base del backend
  private historialSubject = new Subject<HistorialItem[]>();

  historial$ = this.historialSubject.asObservable();

  constructor(private http: HttpClient) { }

  getHistorial(placa: string, startDate?: string, endDate?: string): Observable<HistorialItem[]> {
    const body = {
      placa: placa,
      startDate: startDate,
      endDate: endDate
    };

    return this.http.post<HistorialItem[]>(this.apiUrl, body);
  }

  updateHistorial(historialItems: HistorialItem[]) {
    this.historialSubject.next(historialItems);
  }
}
