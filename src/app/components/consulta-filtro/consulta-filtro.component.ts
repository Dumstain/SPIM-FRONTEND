import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-filtro',
  templateUrl: './consulta-filtro.component.html',
  styleUrls: ['./consulta-filtro.component.css']
})
export class ConsultaFiltroComponent {
  constructor() { }

  onSearchDocument() {
    console.log('Buscando documento...');
    // Aquí se implementaría la lógica para buscar el documento
  }

  onSearchByDate() {
    console.log('Buscando por fecha...');
    // Aquí se implementaría la lógica para buscar por fechas
  }

}
