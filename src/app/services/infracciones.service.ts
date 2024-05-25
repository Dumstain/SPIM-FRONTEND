import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfraccionesService {
  private apiUrl = 'http://localhost:3000'; // Asegúrate de que la URL coincida con tu entorno de backend

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/articulos`);
  }

  getFracciones(articuloId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/fracciones/${articuloId}`);
  }

  getIncisos(articuloId: number, fraccionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/incisos/${articuloId}/${fraccionId}`);
  }

  getMotivo(incisoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/motivo/${incisoId}`);
  }

  registrarInfraccion(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/registrar-infraccion`, data);
  }

  obtenerInfraccionesPorInfractor(infractorId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/infracciones/${infractorId}`);
  }

  eliminarInfraccion(detalleId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/infracciones/${detalleId}`);
  }
}
