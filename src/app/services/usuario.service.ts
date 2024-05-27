import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  nombre: string;
  correo: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios'; // URL base del backend

  constructor(private http: HttpClient) { }

  getUsuario(userId: string): Observable<Usuario> {
    const headers = new HttpHeaders().set('usuario_id', userId);

    return this.http.get<Usuario>(this.apiUrl, { headers });
  }
}
