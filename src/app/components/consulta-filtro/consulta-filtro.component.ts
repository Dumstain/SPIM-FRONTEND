import { Component } from '@angular/core';
import { HistorialJuezService, HistorialItem } from '../../services/historial-juez.service';

@Component({
  selector: 'app-consulta-filtro',
  templateUrl: './consulta-filtro.component.html',
  styleUrls: ['./consulta-filtro.component.css']
})
export class ConsultaFiltroComponent {
  identifier: string = '';
  startDate: string = '';
  endDate: string = '';
  historialItems: HistorialItem[] = [];

  constructor(private historialJuezService: HistorialJuezService) { }

  onSearchDocument() {
    console.log('Buscando documento:', this.identifier);
    this.historialJuezService.getHistorial(this.identifier).subscribe({
      next: (data) => {
        console.log('Infracciones encontradas:', data);
        this.historialItems = data;
        this.historialJuezService.updateHistorial(data);
      },
      error: (err) => {
        console.error('Error durante la búsqueda de documento:', err);
      }
    });
  }

  onSearchByDate() {
    const adjustedStartDate = this.startDate ? `${this.startDate}T00:00:00` : '';
    const adjustedEndDate = this.endDate ? `${this.endDate}T23:59:59` : '';

    console.log('Buscando por fecha:', adjustedStartDate, adjustedEndDate);
    this.historialJuezService.getHistorial(this.identifier, adjustedStartDate, adjustedEndDate).subscribe({
      next: (data) => {
        console.log('Infracciones encontradas:', data);
        this.historialItems = data;
        this.historialJuezService.updateHistorial(data);
      },
      error: (err) => {
        console.error('Error durante la búsqueda por fecha:', err);
      }
    });
  }
}
