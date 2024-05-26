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
  mostrarTabla = false;
  mostrarBoton = true;
  showPopup = false;

  constructor(private route: Router, private infraccionesService: InfraccionesService) {
    const storedFolio = sessionStorage.getItem('folio');
    if (storedFolio) {
      this.folio = parseInt(storedFolio, 10);
    } else {
      this.folio = this.generateRandomFolio();
      sessionStorage.setItem('folio', this.folio.toString());
    }
  }

  ngOnInit() {
    this.obtenerInfracciones();
  }

  generateRandomFolio(): number {
    return Math.floor(Math.random() * 1000000);
  }

  toggleModal() {
    this.showPopup = !this.showPopup;
  }

  closeModal() {
    this.showPopup = false;
  }

  handleFormSubmission() {
    this.obtenerInfracciones();
    this.closeModal(); // Cierra el modal después de actualizar las infracciones
  }

  obtenerInfracciones() {
    const folioString = sessionStorage.getItem('folio');
    if (folioString) {
      const folio = parseInt(folioString, 10);
      this.infraccionesService.obtenerInfraccionesPorFolio(folio).subscribe({
        next: (data) => {
          console.log('Infracciones recibidas:', data);
          this.infracciones = data;
          this.mostrarTabla = data.length > 0;
          sessionStorage.setItem('infracciones', JSON.stringify(this.infracciones));
          this.obtenerDetalleIds(); // Obtener los detalle_id después de cargar las infracciones
        },
        error: (err) => {
          console.error('Error al obtener las infracciones:', err);
        }
      });
    } else {
      console.error('Folio no encontrado en sessionStorage');
    }
  }

  obtenerDetalleIds() {
    const folioString = sessionStorage.getItem('folio');
    if (folioString) {
      const folio = parseInt(folioString, 10);
      this.infraccionesService.obtenerDetalleIdsPorFolio(folio).subscribe({
        next: (data) => {
          console.log('Detalles recibidos:', data);
          sessionStorage.setItem('detalleIds', JSON.stringify(data)); // Guardar los detalle_id en sessionStorage
        },
        error: (err) => {
          console.error('Error al obtener los detalles:', err);
        }
      });
    } else {
      console.error('Folio no encontrado en sessionStorage');
    }
  }

  irAPagina(titulo: string): void {
    this.route.navigate([titulo]);
  }

  eliminarInfraccion(infraccion: any) {
    const detalleIds = JSON.parse(sessionStorage.getItem('detalleIds') || '[]');
    const detalle = detalleIds.find((d: any) => d.conjunto_id === infraccion.conjunto_id);

    if (!detalle || !detalle.detalle_id) {
      console.error('Detalle ID no encontrado en la infracción');
      return;
    }

    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar la infracción con folio ${infraccion.folio}?`);
    if (confirmacion) {
      this.infraccionesService.eliminarInfraccion(detalle.detalle_id).subscribe({
        next: () => {
          console.log('Infracción eliminada');
          this.obtenerInfracciones(); // Fetch actualizado después de eliminar
        },
        error: (err) => {
          console.error('Error al eliminar la infracción:', err);
        }
      });
    }
  }

  registrarInfraccion() {
    const infraccionData = {
      // Aquí se deben incluir los datos necesarios para registrar la infracción
    };

    this.infraccionesService.registrarInfraccion(infraccionData).subscribe({
      next: (response: any) => {
        console.log('Infracción registrada correctamente', response);
        sessionStorage.setItem('agrupacion_id', response.agrupacion_id); // Guardar agrupacion_id en sessionStorage
        this.handleFormSubmission();
      },
      error: (err) => {
        console.error('Error al registrar la infracción:', err);
      }
    });
  }
}
