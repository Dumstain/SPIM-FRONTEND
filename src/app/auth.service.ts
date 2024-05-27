import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/usuarios'; // Asegúrate de que la URL coincida con tu entorno de backend

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { correo: username, contrasena: password });
  }

  handleAuthentication(token: string, userId: number, tipo_usuario: string): void {
    sessionStorage.setItem('token', token); // Guarda el token en sessionStorage
    sessionStorage.setItem('userId', userId.toString()); // Guarda el userId en sessionStorage
    sessionStorage.setItem('tipoUsuario', tipo_usuario); // Guarda el tipo de usuario en sessionStorage

    // Redireccionar según el tipo de usuario
    switch (tipo_usuario) {
      case 'Superadmin':
        this.router.navigate(['/superadmin']);
        break;
      case 'Juez':
        this.router.navigate(['/Consulta-inicio']);
        break;
      case 'Oficial':
        this.router.navigate(['/ingreso-de-placas']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('tipoUsuario');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }
}
