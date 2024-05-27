import { Component, OnInit, OnDestroy } from '@angular/core';
import { HistorialJuezService, HistorialItem } from '../../services/historial-juez.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-consulta-tabla-infracciones',
  templateUrl: './consulta-tabla-infracciones.component.html',
  styleUrls: ['./consulta-tabla-infracciones.component.css']
})
export class ConsultaTablaInfraccionesComponent implements OnInit, OnDestroy {
  records: HistorialItem[] = [];
  expandedIndex: number | null = null;
  private subscription: Subscription | null = null;
  selectedImage: string | null = null;

  constructor(private historialJuezService: HistorialJuezService) {}

  ngOnInit() {
    this.subscription = this.historialJuezService.historial$.subscribe(
      data => {
        this.records = data;
      }
    );

    // Cargar datos iniciales desde sessionStorage si existen
    const storedData = sessionStorage.getItem('historialItems');
    if (storedData) {
      this.records = JSON.parse(storedData);
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleDetail(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  getImageUrl(imagePath: string): string {
    return `http://localhost:3000/${imagePath}`; // Ajuste esta URL base según su configuración
  }

  openModal(imageUrl: string): void {
    this.selectedImage = imageUrl;
    const modal = document.getElementById("imageModal");
    if (modal) {
      modal.style.display = "block";
    }
  }

  closeModal(): void {
    this.selectedImage = null;
    const modal = document.getElementById("imageModal");
    if (modal) {
      modal.style.display = "none";
    }
  }
}
