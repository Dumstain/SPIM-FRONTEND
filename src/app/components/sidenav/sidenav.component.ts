import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from '../../services/usuario.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  usuario: Usuario | null = null;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      this.usuarioService.getUsuario(userId).subscribe({
        next: (data) => {
          this.usuario = data;
        },
        error: (err) => {
          console.error('Error al obtener los datos del usuario:', err);
        }
      });
    } else {
      console.error('No se encontró user_id en sessionStorage');
    }
  }
}
