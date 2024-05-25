import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Asegúrate de que la URL coincida con tu entorno de backend

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { correo: username, contrasena: password });
  }

  handleAuthentication(token: string, userId: number, tipo_usuario: string): void {
    sessionStorage.setItem('token', token); // Guarda el token en sessionStorage
    sessionStorage.setItem('userId', userId.toString()); // Guarda el userId en sessionStorage
    sessionStorage.setItem('tipoUsuario', tipo_usuario); // Guarda el tipo de usuario en sessionStorage
    // Redireccionar según el tipo de usuario
    if (tipo_usuario === 'Superadmin') {
      this.router.navigate(['/superadmin']);
    } else if (tipo_usuario === 'Juez') {
      this.router.navigate(['/juez']);
    } else if (tipo_usuario === 'Oficial') {
      this.router.navigate(['/ingreso-de-placas']);
    }
  }
}
