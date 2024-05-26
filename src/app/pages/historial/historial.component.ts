import { Component, OnInit } from '@angular/core';
import { HistorialService, HistorialItem } from '../../services/historial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  historialItems: HistorialItem[] = [];
  noDataMessage: string | null = null;
  allHistorialItems: HistorialItem[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;
  isRedirecting: boolean = false;

  constructor(private historialService: HistorialService, private router: Router) { }

  ngOnInit(): void {
    const placa = sessionStorage.getItem('identifier');
    if (placa) {
      this.historialService.getHistorial(placa).subscribe({
        next: (data) => {
          this.allHistorialItems = data;
          this.historialItems = this.allHistorialItems.slice(0, this.itemsPerPage);
          if (data.length === 0) {
            this.noDataMessage = 'No se encontraron infracciones para esta placa.';
          }
        },
        error: (err) => {
          if (err.status === 404) {
            this.noDataMessage = 'No se encontraron infracciones para esta placa.';
          } else {
            console.error('Error fetching historial:', err);
            this.noDataMessage = 'Error al obtener el historial de infracciones.';
          }
        }
      });
    } else {
      this.noDataMessage = 'No se proporcionó una placa válida.';
    }
  }

  loadMore(): void {
    this.currentPage++;
    const nextPageItems = this.allHistorialItems.slice(0, this.itemsPerPage * this.currentPage);
    this.historialItems = nextPageItems;
  }

  registerInfraccion(): void {
    this.router.navigate(['/infraccion-1']);
  }

  terminate(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  redirectToConsulta(): void {
    this.isRedirecting = true;
    setTimeout(() => {
      this.router.navigate(['/consulta']);
    }, 2000); // 2 segundos de espera antes de redirigir
  }
}
