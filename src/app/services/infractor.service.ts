// src/app/services/infractor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfractorService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  public registrarInfractor(infractorData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar-infractor`, infractorData);
  }
}
