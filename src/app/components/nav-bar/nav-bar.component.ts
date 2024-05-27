import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router
import { CountdownTimerService } from '../countdown-timer/countdown-timer.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isMenuVisible: boolean = false;
  remainingTime: string = '';

  constructor(
    private countdownTimerService: CountdownTimerService,
    private router: Router  // Inyectar Router aquí
  ) {}

  ngOnInit() {
    this.countdownTimerService.currentTimeLeft.subscribe(time => {
      this.remainingTime = time;
    });
  }
  
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  cerrarSesion() {
    // Lógica para manejar el cierre de sesión
    // Por ejemplo, borrar el token de autenticación, limpiar el localStorage, etc.
    
    // Redireccionar al usuario a la ruta deseada, como la página de inicio
    this.router.navigate(['/login']); // Asegúrate de que la ruta '/inicio' esté definida en tu módulo de rutas
  }
}
