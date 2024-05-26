import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Infraccion {
  conjunto_id: number;
  articulo: string;
  fraccion: string;
  inciso: string;
  motivo: string;
  observaciones: string;
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
}

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private apiUrl = 'http://localhost:3000/api/historial'; // URL base del backend

  constructor(private http: HttpClient) { }

  getHistorial(placa: string): Observable<HistorialItem[]> {
    return this.http.get<HistorialItem[]>(`${this.apiUrl}/${placa}`);
  }
}
