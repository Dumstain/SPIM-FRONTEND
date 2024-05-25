import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfraccionesService } from '../../services/infracciones.service';

@Component({
  selector: 'app-formulario-infraccion5',
  templateUrl: './formulario-infraccion5.component.html',
  styleUrls: ['./formulario-infraccion5.component.css']
})
export class FormularioInfraccion5Component implements OnInit {
  infracciones: any[] = [];
  folio: number;
  zona = '';
  mostrarTabla = false;
  mostrarBoton = true;
  showPopup = false;

  constructor(private route: Router, private infraccionesService: InfraccionesService) {
    this.folio = this.generateRandomFolio();
  }

  ngOnInit() {
    this.obtenerInfracciones();
  }

  generateRandomFolio(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  toggleModal() {
    this.showPopup = !this.showPopup;
  }

  handleFormSubmission(data: any) {
    console.log('Formulario enviado:', data);
    this.toggleModal();
    this.infracciones.push(data);
    this.mostrarTabla = true;
  }

  obtenerInfracciones() {
    const infractorIdString = sessionStorage.getItem('infractorId');
    if (infractorIdString) {
      const infractorId = parseInt(infractorIdString, 10);
      this.infraccionesService.obtenerInfraccionesPorInfractor(infractorId).subscribe({
        next: (data) => {
          console.log('Infracciones recibidas:', data); // Verificar datos recibidos
          this.infracciones = data;
          this.mostrarTabla = data.length > 0; // Mostrar la tabla solo si hay infracciones
        },
        error: (err) => {
          console.error('Error al obtener las infracciones:', err);
        }
      });
    } else {
      console.error('Infractor ID no encontrado en sessionStorage');
    }
  }

  irAPagina(titulo: string): void {
    this.route.navigate([titulo]);
  }

  editarInfraccion(infraccion: any) {
    // Aquí puedes abrir un modal de edición o navegar a una página de edición
    console.log('Editar infracción:', infraccion);
    // Implementa la lógica para editar la infracción
  }

  eliminarInfraccion(infraccion: any) {
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar la infracción con folio ${infraccion.folio}?`);
    if (confirmacion) {
      this.infraccionesService.eliminarInfraccion(infraccion.detalle_id).subscribe({
        next: () => {
          console.log('Infracción eliminada');
          this.infracciones = this.infracciones.filter(i => i.detalle_id !== infraccion.detalle_id);
          this.mostrarTabla = this.infracciones.length > 0;
        },
        error: (err) => {
          console.error('Error al eliminar la infracción:', err);
        }
      });
    }
  }
}
