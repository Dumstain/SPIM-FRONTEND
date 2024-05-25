import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']

  
})
export class BotonesComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
    
  

  goToPreviousPage(event: Event) {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
    const currentRoute = this.route.snapshot.routeConfig?.path;
    if (currentRoute) {
      const currentNumber = this.extractNumber(currentRoute);
      if (currentNumber > 1) { // Ajusta este valor según tus rutas mínimas
        this.router.navigate([`/infraccion-${currentNumber - 1}`]);
      }
    }
  }

  private extractNumber(route: string): number {
    const match = route.match(/infraccion-(\d+)/);
    return match ? parseInt(match[1], 10) : 1; // Retorna 1 si no se encuentra un número
  }

}


