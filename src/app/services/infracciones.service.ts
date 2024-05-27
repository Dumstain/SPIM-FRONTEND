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
    return this.http.get(`${this.apiUrl}/api/infracciones/articulos`);
  }

  getFracciones(articuloId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/infracciones/fracciones/${articuloId}`);
  }

  getIncisos(articuloId: number, fraccionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/infracciones/incisos/${articuloId}/${fraccionId}`);
  }

  getMotivo(incisoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/infracciones/motivo/${incisoId}`);
  }

  registrarInfraccion(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/infractores/registrar-infraccion`, data);
  }

  obtenerInfraccionesPorFolio(folio: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/infracciones/${folio}`);
  }
  
  obtenerDetalleIdsPorFolio(folio: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/infracciones/detalles-por-folio/${folio}`);
  }

  eliminarInfraccion(detalleId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/infracciones/eliminar-infraccion/${detalleId}`);
  }
}
  