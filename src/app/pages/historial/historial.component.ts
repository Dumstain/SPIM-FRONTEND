import { Component, OnInit } from '@angular/core';

export interface HistorialItem {
  titulo: string;
  descripciones: string[]; // Una lista de descripciones para cada búsqueda
}

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  historialItems: HistorialItem[] = []; // Inicializada con un array vacío

  ngOnInit(): void {
    // Aquí es donde obtendrías los datos del historial, posiblemente de un servicio
    this.historialItems = [
      {
        titulo: 'Búsqueda de Vehículo 1',
        descripciones: ['Detalle de la búsqueda 1a', 'Detalle de la búsqueda 1b']
      },
      {
        titulo: 'Búsqueda de Vehículo 2',
        descripciones: ['Detalle de la búsqueda 2a', 'Detalle de la búsqueda 2b']
      },
      // ... y así sucesivamente
    ];
  }
}


