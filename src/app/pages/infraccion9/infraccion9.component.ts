import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infraccion9',
  templateUrl: './infraccion9.component.html',
  styleUrls: ['./infraccion9.component.css'],
})
export class Infraccion9Component implements OnInit {
  isExpanded: boolean = false;
  infractor: any;
  direccion: any;
  coche: any;
  folio: string | null = null;
  infracciones: any[] = [];
  imagenUrl: string | null = null;
  cocheTipo: string | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.infractor = JSON.parse(sessionStorage.getItem('infractor') || '{}');
    this.direccion = JSON.parse(sessionStorage.getItem('address') || '{}');
    this.folio = sessionStorage.getItem('folio');
    this.infracciones = JSON.parse(sessionStorage.getItem('infracciones') || '[]');
    this.imagenUrl = '/uploads/image.png'; // Ruta a la imagen subida
    this.cocheTipo = sessionStorage.getItem('cocheTipo');

    this.coche = JSON.parse(sessionStorage.getItem('coche') || '{}');
    if (!this.coche.coche_id) {
      console.error('Coche no encontrado en sessionStorage');
    }

    this.coche.placas = this.infractor.placas;
    this.coche.estado = this.infractor.estado;
    this.coche.color = this.infractor.color_coche;
  }

  toggleContent(): void {
    this.isExpanded = !this.isExpanded;
  }

  downloadPdf() {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const logo = new Image();
    logo.src = '../../../assets/icons/logopol.png';
    logo.onload = () => {
      doc.addImage(logo, 'PNG', 20, 10, 30, 30);
      this.addTextContent(doc);
    };
    logo.onerror = (e) => {
      console.error('Error loading logo:', e);
      this.addTextContent(doc);
    };
  }

  private addTextContent(doc: jsPDF) {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();
    const fileName = `infraccion_${this.folio}_${date}.pdf`;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(100);
    doc.text('POLICIA DE MORELIA', 105, 20, { align: 'center' });

    doc.setFontSize(14);
    doc.setTextColor(150, 0, 0);
    doc.text('BOLETA DE INFRACCIÓN', 105, 30, { align: 'center' });
    doc.text('Folio', 170, 40, { align: 'right' });
    doc.text('NO. ' + this.folio, 200, 40, { align: 'right' });

    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text('Morelia, Michoacán', 20, 50);
    doc.text('Fecha: ' + date, 20, 55);
    doc.text('Hora: ' + time, 60, 55);

    doc.setFont('helvetica', 'bold');
    doc.text('PROBABLE INFRACTOR', 20, 70);
    doc.setFont('helvetica', 'normal');
    doc.text('Nombre: ' + this.infractor.nombre, 20, 75);
    doc.text('Placas: ' + this.infractor.placas, 20, 80);

    doc.setFont('helvetica', 'bold');
    doc.text('LUGAR DE INFRACCIÓN', 20, 90);
    doc.setFont('helvetica', 'normal');
    doc.text('Ubicación: ' + this.direccion.detalles, 20, 95);

    doc.setFont('helvetica', 'bold');
    doc.text('VEHÍCULO', 20, 110);
    doc.setFont('helvetica', 'normal');
    if (this.coche) {
      doc.text('Marca: ' + this.coche.marca, 20, 115);
      doc.text('Línea: ' + this.coche.linea, 20, 120);
      doc.text('Tipo: ' + this.cocheTipo, 20, 125);
      doc.text('Modelo: ' + this.coche.modelo, 20, 130);
      doc.text('Color: ' + this.coche.color, 20, 135);
      doc.text('Placas: ' + this.coche.placas, 20, 140);
      doc.text('Estado de Placas: ' + this.coche.estado, 20, 145);
    }

    doc.setFont('helvetica', 'bold');
    doc.text('INFRACCIONES', 20, 160);
    let y = 165;
    for (let infraccion of this.infracciones) {
      doc.setFont('helvetica', 'normal');
      doc.text(`Artículo: ${infraccion.articulo}`, 20, y);
      doc.text(`Fracción: ${infraccion.fraccion}`, 20, y+5);
      doc.text(`Inciso: ${infraccion.inciso}`, 20, y + 10);
      doc.text(`Motivo: ${infraccion.motivo}`, 20, y + 15);
      doc.text(`Observaciones: ${infraccion.observaciones}`, 20, y + 20);
      y += 30;
    }

    doc.setFont('helvetica', 'bold');
    doc.text('FIRMAS', 20, y + 10);
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(20, y + 15, 115, y + 15);
    doc.line(120, y + 15, 190, y + 15);
    doc.setFont('helvetica', 'normal');
    doc.text('Nombre, firma y número de placa del Policía de Morelia', 20, y + 20);
    doc.text('Firma de notificación al probable infractor', 120, y + 20);

    doc.save(fileName);
  }

  guardarDocumento() {
    const agrupacionId = sessionStorage.getItem('agrupacion_id');
    const documento = {
      agrupacion_id: agrupacionId, // Asume que agrupacion_id está guardado en sessionStorage
      oficial_nombre: 'Nombre del Oficial', // Cambia esto según tus necesidades
      direccion_id: sessionStorage.getItem('direccion_id') || '',
      folio: this.folio,
      formato_documento: 'PDF',
      tipo_coche: this.cocheTipo
    };

    this.http.post('http://localhost:3000/api/documentos', documento).subscribe({
      next: res => {
        console.log('Documento guardado correctamente', res);
        sessionStorage.clear();
        alert('Infracción registrada con éxito');
        this.router.navigate(['ingreso-de-placas']);
      },
      error: err => {
        console.error('Error al guardar el documento', err);
      }
    });
  }

  irAPagina(titulo: string): void {
    this.router.navigate([titulo]);
  }
}
