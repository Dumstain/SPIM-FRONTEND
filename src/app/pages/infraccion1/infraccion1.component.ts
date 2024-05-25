import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InfractorService } from '../../services/infractor.service';
import { CocheService } from '../../services/coche.service';

@Component({
  selector: 'app-infraccion1',
  templateUrl: './infraccion1.component.html',
  styleUrls: ['./infraccion1.component.css']
})
export class Infraccion1Component implements OnInit {
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
  selectedColorName: string | null = null;
  selectedMarca: string = '';
  selectedLinea: string = '';
  selectedModelo: string = '';
  selectedTipo: string = '';
  selectedCarId: string | null = null;
  selectedCarData: any = null;
  tipoSeleccionado: string = ''; // Variable para almacenar el tipo seleccionado
  isModalOpen: boolean = false;
  isConfirmed: boolean = false; // Variable para controlar la confirmación
  isAbsent: boolean = false; // Variable para controlar si el nombre es "Ausente"

  infractorData = {
    nombre: '',
    placas: '',
    estado: '',
    color_coche: ''
  };
  coches: any[] = [];

  constructor(
    private route: Router,
    private http: HttpClient, // Inyectar HttpClient
    private infractorService: InfractorService,
    private cocheService: CocheService
  ) {}

  direccionData = {
    estado: ''
  };

  marcas: string[] = [];
  lineas: string[] = [];
  modelos: string[] = [];
  tipos: string[] = [];

  ngOnInit() {
    this.fetchCoches();
    this.isConfirmed = sessionStorage.getItem('isConfirmed') === 'true';
  }

  fetchCoches() {
    this.cocheService.listarCoches({}).subscribe({
      next: (coches: any[]) => {
        this.coches = coches;
        this.marcas = [...new Set(coches.map(coche => coche.marca))].sort();
      },
      error: (err) => console.error('Error fetching coches', err)
    });
  }

  updateLineas() {
    this.lineas = [...new Set(this.coches
      .filter(coche => coche.marca === this.selectedMarca)
      .map(coche => coche.linea))].sort();
  }

  updateModelos() {
    this.modelos = [...new Set(this.coches
      .filter(coche => coche.marca === this.selectedMarca && coche.linea === this.selectedLinea)
      .map(coche => coche.modelo))].sort();
  }

  updateTipos() {
    const cochesFiltrados = this.coches.filter(coche =>
      coche.marca === this.selectedMarca &&
      coche.linea === this.selectedLinea &&
      coche.modelo == this.selectedModelo);
    this.tipos = cochesFiltrados.flatMap(coche => coche.tipo.split(',').map((tipo: string) => tipo.trim())).sort();
  }

  obtenerIdDelCoche() {
    this.cocheService.obtenerIdCoche(this.selectedCarData).subscribe({
      next: (response) => {
        this.selectedCarId = response.coche_id;
        console.log('Coche ID obtenido:', this.selectedCarId);
        console.log('Tipo enviado:', this.selectedTipo);
      },
      error: (error) => console.error('Error al obtener el ID del coche:', error)
    });
  }

  updateSelectedCar() {
    this.selectedCarData = {
      marca: this.selectedMarca,
      modelo: this.selectedModelo,
      linea: this.selectedLinea,
      tipo: this.selectedTipo
    };
    this.tipoSeleccionado = this.selectedTipo; // Almacenar el tipo seleccionado en una variable separada
    this.obtenerIdDelCoche();
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  colorMap: { [key: string]: string } = {
    '#FFFFFF': 'Blanco',
    '#000000': 'Negro',
    '#808080': 'Gris',
    '#C0C0C0': 'Plata',
    '#FF0000': 'Rojo',
    '#0000FF': 'Azul',
    '#008000': 'Verde',
    '#FFFF00': 'Amarillo',
    '#A52A2A': 'Marrón',
    '#FFA500': 'Naranja',
    '#000080': 'Azul Marino',
    '#F5F5DC': 'Beige',
    '#EE82EE': 'Violeta',
    '#FFC0CB': 'Rosa',
    '#FFD700': 'Dorado',
    '#B87333': 'Cobre',
    '#808000': 'Oliva',
    '#40E0D0': 'Turquesa',
    '#800020': 'Burgundy',
    '#006400': 'Verde Oscuro'
  };

  setColor(color: string) {
    this.selectedColor = color;
    this.selectedColorName = this.colorMap[color] || 'Desconocido';
    this.infractorData.color_coche = this.selectedColorName;
    this.isModalOpen = false;
  }

  setEstado(estado: string) {
    this.infractorData.estado = estado;
    this.direccionData.estado = estado;
  }

  onPlacasChange() {
    console.log('Placas ingresadas:', this.infractorData.placas);
  }

  toggleAbsent(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.isAbsent = checkbox.checked;
    if (this.isAbsent) {
      this.infractorData.nombre = 'Ausente';
    } else {
      this.infractorData.nombre = '';
    }
  }
  

  registrarInfractor() {
    const infractorData = {
      nombre: this.infractorData.nombre,
      placas: this.infractorData.placas,
      estado: this.infractorData.estado,
      color_coche: this.infractorData.color_coche,
      coche_id: this.selectedCarId // Pasar el coche_id aquí
    };

    this.http.post('http://localhost:3000/api/infractor', infractorData).subscribe({
      next: (res: any) => {
        console.log('Infractor registrado', res);
        this.isConfirmed = true; // Marcar como confirmado
        sessionStorage.setItem('isConfirmed', 'true');
        sessionStorage.setItem('infractorId', res.infractor_id); // Guardar infractor_id en sessionStorage
        sessionStorage.setItem('cocheTipo', this.selectedTipo); // Guardar el tipo de coche en sessionStorage
      },
      error: (err) => {
        console.error('Error al registrar el infractor', err);
      }
    });
  }

  irAPagina(titulo: string): void {
    this.route.navigate([titulo]);
  }
}
