import { Component, OnInit } from '@angular/core';
import { InfraccionesService, Infraccion } from '../../services/InfraccinesService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-infraccion',
  templateUrl: './lista-infraccion.component.html',
  styleUrls: ['./lista-infraccion.component.css'],
})
export class ListaInfraccionComponent implements OnInit {
  infracciones: Infraccion[] = [];

  constructor(private infraccionesService: InfraccionesService, private router: Router) {}

  ngOnInit() {
    this.infraccionesService.infracciones$.subscribe(infracciones => {
      this.infracciones = infracciones;
    });
  }

  goToForm() {
    this.router.navigate(['/ruta-del-formulario']);
  }

  
  removeInfraccion(infraccion: Infraccion) {
    this.infraccionesService.removeInfraccion(infraccion);
  }
}
