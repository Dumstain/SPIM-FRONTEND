import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-tabla-infracciones',
  templateUrl: './consulta-tabla-infracciones.component.html',
  styleUrls: ['./consulta-tabla-infracciones.component.css'],
})
export class ConsultaTablaInfraccionesComponent {
  // Datos de ejemplo
  records: any[] = [
    {
      clave: '001',
      oficial: 'Juan Pérez',
      fecha: '2024-05-07',
      placaVehicular: 'XYZ123',
      tipoDeLicencia: 'Tipo 1',
      estado: 'Activo',
      accion: 'Editar',
    },
    {
      clave: '002',
      oficial: 'Ana Gómez',
      fecha: '2024-05-06',
      placaVehicular: 'ABC456',
      tipoDeLicencia: 'Tipo 2',
      estado: 'Inactivo',
      accion: 'Editar',
    },
  ];

  
  expandedIndex: number | null = null;

  constructor() {}
  
  toggleDetail(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

}
