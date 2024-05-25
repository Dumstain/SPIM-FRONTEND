// src/app/services/coche.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocheService {
  private baseUrl = 'http://localhost:3000/api'; // Asegúrate de cambiar esto por tu URL base correcta

  constructor(private http: HttpClient) { }

  listarCoches(filters: { marca?: string, linea?: string, modelo?: string, tipo?: string }): Observable<any> {
    return this.http.get(`${this.baseUrl}/coches`, { params: filters });
  }

  obtenerIdCoche(cocheData: { marca: string; modelo: string; linea: string; tipo: string; }): Observable<any> {
    return this.http.post(`${this.baseUrl}/buscar-coche-id`, cocheData);
  }

  
}

