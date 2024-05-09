import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro1',
  templateUrl: './infraccion1.component.html',
  styleUrls: ['./infraccion1.component.css']
})
export class Infraccion1Component { 
  constructor(private router: Router) { }

  goToNextPage() {
    // Asume que tienes una ruta configurada en tu módulo de enrutamiento para 'next-page'
    this.router.navigate(['/app.component.html']); // Cambia '/next-page' por la ruta real que quieras usar
  }
  
   mexicanStates: string[] = [
    'Seleccionar--',
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Coahuila',
    'Colima',
    'Durango',
    'Estado de México',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Ciudad de México',
    'Michoacán',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas'
  ];
  selectedColor: string = '';
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  setColor(color: string) {
    this.selectedColor = color;
    this.isModalOpen = false; // presumiblemente quieres cerrar el modal cuando un color es seleccionado
  }
}